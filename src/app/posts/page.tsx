import React from 'react';
import Link from 'next/link';
import { getPostsList } from '@/utils';

export default async function PostListPage() {
  const posts = await getPostsList();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.href}>{post.title?.toString()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
