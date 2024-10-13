// app/frontend/pages/Posts/New.tsx
import { Head, useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

interface NewProps {
  post: {
    title: string
    content: string
  }
}

export default function New({ post }: NewProps) {
  const { data, setData, post: submit, errors } = useForm(post)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit('/posts')
  }

  return (
    <>
      <Head title="Create New Post" />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Create New Post</h1>
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <Link href="/posts" className="text-gray-700">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}