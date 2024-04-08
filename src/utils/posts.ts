import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';

type PostMetaData = {
  slug: string;
  href: string;
} & Metadata;

const postsDirectory = path.join(process.cwd(), '_posts');

async function processDirectory(directory: string) {
  const items = await fs.readdir(directory, { withFileTypes: true });

  const promises = items.map(async (item): Promise<PostMetaData[]> => {
    if (item.isDirectory()) {
      return await processDirectory(path.join(directory, item.name));
    }

    if (item.isFile() && path.extname(item.name) === '.mdx') {
      const fullPath = path.join(directory, item.name);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data: metadata } = matter(fileContents);
      const slug = item.name.replace(/\.mdx$/, '');
      const href = `posts/${slug}`;
      return [{ slug, href, ...metadata }];
    }

    return [];
  });

  const results = await Promise.all(promises);
  return results.flat();
}

export async function getPostsList() {
  const allPostsData = await processDirectory(postsDirectory);
  return allPostsData;
}
