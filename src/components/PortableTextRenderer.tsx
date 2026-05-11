import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

/* eslint-disable @typescript-eslint/no-explicit-any */

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = value?.children?.map((c: any) => c.text).join('') || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 20, margin: '24px 0', color: 'var(--ink-dim)' }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code style={{ background: 'var(--bg-elev-2)', padding: '2px 6px', borderRadius: 4, fontSize: '0.9em' }}>
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          style={{ color: 'var(--accent)', textDecoration: 'underline' }}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure style={{ margin: '32px 0' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <figcaption style={{ marginTop: 8, fontSize: '0.85rem', color: 'var(--ink-mute)', textAlign: 'center' }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}

/** Extract h2 headings from portable text blocks for table of contents */
export function extractHeadings(body: any[]): { text: string; id: string }[] {
  if (!body) return [];
  return body
    .filter((block: any) => block._type === 'block' && block.style === 'h2')
    .map((block: any) => {
      const text = block.children?.map((c: any) => c.text).join('') || '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return { text, id };
    });
}
