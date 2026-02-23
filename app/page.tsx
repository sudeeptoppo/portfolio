import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      content:
        "This is my first post on my blog. I am excited to share my thoughts and experiences with you all.",
    },
    {
      id: 2,
      title: "Another Post",
      content: "This is another post on my blog. I hope you enjoy reading it.",
    },
  ]; // Replace with actual posts data
  return (
    <main className="min-h-screen bg-stone-100">
      <div className="flex flex-col items-center justify-center content-center">
        <h1>hi i&apos;m sudeep Toppo</h1>
        <p className="max-w-md">
          i am a software developer and a student at the university of delhi. i
          am currently pursuing my btech in computer science and engineering. i
          have a passion for coding and i love to learn new technologies. i am
          also interested in web development and mobile app development.
        </p>
        <div className="flex gap-4">
          <Button >
            <Link href="/blogs">Read My Blogs</Link>
          </Button>
          <Button >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2> About Me</h2>
        <p>
          I am a passionate software developer with a strong foundation in
          computer science and engineering. My journey in programming began
          during my undergraduate studies at the University of Delhi, where I
          developed a deep interest in building scalable and efficient
          applications. I specialize in full-stack development, with expertise
          in both frontend and backend technologies.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2>Recent Posts</h2>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Card key={post.id}>
                <Link href={`/blogs/${post.id}`}>
                  <CardContent>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </main>
  );
}
