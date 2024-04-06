import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { getHighlighter } from "shiki";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { readFile } from "fs/promises";
import remarkGfm from "remark-gfm";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const postFile = await readFile(`_posts/${slug}.mdx`);

  const { data: metadata } = matter(postFile);

  return metadata;
}

export default async function Page({ params: { slug } }: Props) {
  const postFile = await readFile(`_posts/${slug}.mdx`, "utf-8");

  const { content } = matter(postFile);

  const highlighter = await getHighlighter({
    themes: ["github-dark"],
    langs: ["typescript"],
  });

  return (
    <MDXRemote
      // options={{
      //   mdxOptions: {
      //     remarkPlugins: [remarkGfm],
      //     rehypePlugins: [
      //       [
      //         rehypeShikiFromHighlighter as any,
      //         highlighter,
      //         {
      //           themes: {
      //             light: "github-dark",
      //             dark: "github-dark",
      //           },
      //         },
      //       ],
      //     ],
      //   },
      // }}
      source={content}
    />
  );
}
