import { MDXRemote } from "next-mdx-remote/rsc";

import { readFileSync } from "fs";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const postFile = readFileSync(`_posts/${slug}.mdx`);

  const { data: metadata } = matter(postFile);

  return metadata;
}

export default function Page({ params: { slug } }: Props) {
  const postFile = readFileSync(`_posts/${slug}.mdx`);

  const { content } = matter(postFile);

  return <MDXRemote source={content} />;
}
