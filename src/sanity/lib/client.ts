import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'g1x6uxb8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
