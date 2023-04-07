import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto prose lg:prose-xl">
      <h1 className="text-slate-700 mt-16">Hey, I am Renata 👋&nbsp;</h1>
      <Posts />
    </main>
  );
}
