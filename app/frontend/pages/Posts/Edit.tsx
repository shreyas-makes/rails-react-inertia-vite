// app/frontend/pages/Posts/Edit.tsx
import { Head, useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

interface Post {
  id: number
  title: string
  content: string
}

interface EditProps {
  post: Post
}

export default function Edit({ post }: EditProps) {
  const { data, setData, put, errors } = useForm({
    title: post.title,
    content: post.content,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    put(`/posts/${post.id}`)
  }

  return (
    <>
      <Head title="Edit Post" />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              required
            />
            {errors.title && <div className="text-red-500">{errors.title}</div>}
          </div>
          <div>
            <label className="block text-gray-700">Content</label>
            <textarea
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              rows={10}
              required
            ></textarea>
            {errors.content && <div className="text-red-500">{errors.content}</div>}
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
            <Link href={`/posts/${post.id}`} className="text-gray-700">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}