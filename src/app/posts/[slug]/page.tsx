import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { getHighlighter } from 'shiki';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import { readFile } from 'fs/promises';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { join } from 'path';
import { anchorStyle, articleStyle, headingStyle, listItemStyle, paragraphStyle } from './styles.css';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const postFile = await readFile(`_posts/${slug}.mdx`);

  const { data: metadata } = matter(postFile);

  return metadata;
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const filePath = join(process.cwd(), '_posts', `${slug}.mdx`);

  const postFile = await readFile(filePath, 'utf-8');

  const { content, data: metaData } = matter(postFile);

  const highlighter = await getHighlighter({
    themes: ['github-dark'],
    langs: ['typescript'],
  });

  return (
    <article className={articleStyle}>
      <h1 className={headingStyle}>{metaData.title}</h1>
      <p className={paragraphStyle}>{metaData.description}</p>
      <p className={paragraphStyle}>작성일 {metaData.date}</p>
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                rehypeShikiFromHighlighter as any,
                highlighter,
                {
                  themes: {
                    light: 'github-dark',
                    dark: 'github-dark',
                  },
                },
              ],
            ],
          },
        }}
        source={content}
        components={{
          h2: (props) => <h2 className={headingStyle} {...props} />,
          p: (props) => <p className={paragraphStyle} {...props} />,
          a: (props) => <a className={anchorStyle} {...props} />,
          li: (props) => <li className={listItemStyle} {...props} />,
        }}
      />
    </article>
  );
}
