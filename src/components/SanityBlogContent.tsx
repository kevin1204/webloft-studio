import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Renders Sanity Portable Text body with the same section-based layout
 * as static blog posts (section numbers, intro styling, styled bullets).
 *
 * Splits the body array by h2 blocks into discrete sections, each wrapped
 * in `.wl-blog-content-block` with a section number and proper class names.
 */

type Section = {
  id: string;
  heading: string;
  blocks: any[];
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getBlockText(block: any): string {
  return block.children?.map((c: any) => c.text).join('') || '';
}

/** Split portable text body into sections delimited by h2 headings */
function splitIntoSections(body: any[]): { preamble: any[]; sections: Section[] } {
  const preamble: any[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const block of body) {
    if (block._type === 'block' && block.style === 'h2') {
      const text = getBlockText(block);
      current = { id: slugify(text), heading: text, blocks: [] };
      sections.push(current);
    } else if (current) {
      current.blocks.push(block);
    } else {
      preamble.push(block);
    }
  }

  return { preamble, sections };
}

/** Render inline marks (bold, italic, code, links) within a text span */
function renderSpan(child: any, marks: any[]): React.ReactNode {
  let node: React.ReactNode = child.text;

  if (!child.marks || child.marks.length === 0) return node;

  for (const markKey of child.marks) {
    if (markKey === 'strong') {
      node = <strong key={markKey}>{node}</strong>;
    } else if (markKey === 'em') {
      node = <em key={markKey}>{node}</em>;
    } else if (markKey === 'code') {
      node = (
        <code key={markKey} style={{ background: 'var(--bg-elev-2)', padding: '2px 6px', borderRadius: 4, fontSize: '0.9em' }}>
          {node}
        </code>
      );
    } else {
      // Check annotations (links)
      const annotation = marks.find((m: any) => m._key === markKey);
      if (annotation?._type === 'link') {
        const href = annotation.href || '';
        const isExternal = href.startsWith('http');
        node = (
          <a
            key={markKey}
            href={href}
            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {node}
          </a>
        );
      }
    }
  }

  return node;
}

/** Render children spans of a block */
function renderChildren(block: any): React.ReactNode {
  if (!block.children) return null;
  const marks = block.markDefs || [];
  return block.children.map((child: any, i: number) => (
    <span key={child._key || i}>{renderSpan(child, marks)}</span>
  ));
}

/** Render a single block (paragraph, heading, blockquote, image) */
function renderBlock(block: any, isIntro: boolean): React.ReactNode {
  if (block._type === 'image') {
    if (!block.asset) return null;
    return (
      <figure key={block._key} style={{ margin: '32px 0' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          <Image
            src={urlFor(block).width(1200).url()}
            alt={block.alt || ''}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {block.caption && (
          <figcaption style={{ marginTop: 8, fontSize: '0.85rem', color: 'var(--ink-mute)', textAlign: 'center' }}>
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block._type !== 'block') return null;

  switch (block.style) {
    case 'h3':
      return <h3 key={block._key}>{renderChildren(block)}</h3>;
    case 'h4':
      return <h4 key={block._key}>{renderChildren(block)}</h4>;
    case 'blockquote':
      return (
        <blockquote key={block._key} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 20, margin: '24px 0', color: 'var(--ink-dim)' }}>
          {renderChildren(block)}
        </blockquote>
      );
    default:
      return (
        <p key={block._key} className={isIntro ? 'wl-blog-intro' : undefined}>
          {renderChildren(block)}
        </p>
      );
  }
}

/** Collect consecutive list items into grouped lists */
function groupBlocks(blocks: any[]): { type: 'block'; block: any; isIntro: boolean }[] | { type: 'list'; listType: string; items: any[] }[] {
  const groups: any[] = [];
  let currentList: { type: 'list'; listType: string; items: any[] } | null = null;
  let isFirstParagraph = true;

  for (const block of blocks) {
    if (block._type === 'block' && block.listItem) {
      if (currentList && currentList.listType === block.listItem) {
        currentList.items.push(block);
      } else {
        currentList = { type: 'list', listType: block.listItem, items: [block] };
        groups.push(currentList);
      }
    } else {
      currentList = null;
      const isIntro = isFirstParagraph && block._type === 'block' && block.style === 'normal';
      if (isIntro) isFirstParagraph = false;
      groups.push({ type: 'block', block, isIntro });
    }
  }

  return groups;
}

export default function SanityBlogContent({ body }: { body: any[] }) {
  if (!body || body.length === 0) return null;

  const { preamble, sections } = splitIntoSections(body);

  return (
    <>
      {/* Content before first h2 (rare, but handle it) */}
      {preamble.length > 0 && (
        <div className="wl-blog-content-block reveal">
          {groupBlocks(preamble).map((group: any, gi: number) => {
            if (group.type === 'list') {
              const Tag = group.listType === 'number' ? 'ol' : 'ul';
              return (
                <Tag key={gi}>
                  {group.items.map((item: any) => (
                    <li key={item._key}>{renderChildren(item)}</li>
                  ))}
                </Tag>
              );
            }
            return renderBlock(group.block, group.isIntro);
          })}
        </div>
      )}

      {sections.map((section, index) => {
        const grouped = groupBlocks(section.blocks);

        return (
          <section id={section.id} className="wl-blog-content-block reveal" key={section.id}>
            <div className="wl-blog-section-number">{String(index + 1).padStart(2, '0')}</div>
            <h2>{section.heading}</h2>
            {grouped.map((group: any, gi: number) => {
              if (group.type === 'list') {
                const Tag = group.listType === 'number' ? 'ol' : 'ul';
                return (
                  <Tag key={gi}>
                    {group.items.map((item: any) => (
                      <li key={item._key}>{renderChildren(item)}</li>
                    ))}
                  </Tag>
                );
              }
              return renderBlock(group.block, group.isIntro);
            })}
          </section>
        );
      })}
    </>
  );
}
