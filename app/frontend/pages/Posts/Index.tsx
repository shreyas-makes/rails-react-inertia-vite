// app/frontend/pages/Posts/Index.tsx
import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

interface Post {
  id: number
  title: string
  content: string
  created_at: string
}

interface IndexProps {
  posts: Post[]
}

export default function Index({ posts }: IndexProps) {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      Inertia.delete(`/posts/${id}`)
    }
  }

  return (
    <>
      <Head title="Posts" />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <Link href="/posts/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create New Post
        </Link>
        <div className="mt-6">
          {posts.map((post) => (
            <div key={post.id} className="mb-4 p-4 border rounded">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{new Date(post.created_at).toLocaleDateString()}</p>
              <p className="mt-2">{post.content.substring(0, 100)}...</p>
              <div className="mt-2">
                <Link href={`/posts/${post.id}`} className="text-blue-500 mr-2">
                  View
                </Link>
                <Link href={`/posts/${post.id}/edit`} className="text-yellow-500 mr-2">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
