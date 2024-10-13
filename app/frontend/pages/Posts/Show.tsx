// app/frontend/pages/Posts/Show.tsx
import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

interface Post {
  id: number
  title: string
  content: string
  created_at: string
}

interface ShowProps {
  post: Post
}

export default function Show({ post }: ShowProps) {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      Inertia.delete(`/posts/${id}`)
    }
  }

  return (
    <>
      <Head title={post.title} />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{new Date(post.created_at).toLocaleDateString()}</p>
        <div className="mb-4">{post.content}</div>
        <div>
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
        <div className="mt-4">
          <Link href="/posts" className="text-blue-500">
            Back to Posts
          </Link>
        </div>
      </div>
    </>
  )
}