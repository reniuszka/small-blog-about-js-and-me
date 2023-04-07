import getFormattedDate from "@/library/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/library/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

//SSG pages thanks to it (no more server side pages)
export function generateStaticParams() {
  const posts = getSortedPostsData(); //deduped!

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}
//it is a async func as works with dynamic path and gets the params from url
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped! - dont worry about sending the request twice, it will be dedpuplicated
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}