import { Head } from '@inertiajs/react'
import { useState } from 'react'

import reactSvg from '/assets/react.svg'
import inertiaSvg from '/assets/inertia.svg'
import viteRubySvg from '/assets/vite_ruby.svg'

export default function InertiaExample({ name }: { name: string }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Hello {name}!</h1>

        <div className="flex space-x-4 mb-8">
          <a href="https://inertia-rails.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="h-16 w-16" src={inertiaSvg} alt="Inertia logo" />
          </a>
          <a href="https://vite-ruby.netlify.app" target="_blank" rel="noopener noreferrer">
            <img
              className="h-16 w-16"
              src={viteRubySvg}
              alt="Vite Ruby logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              className="h-16 w-16 animate-spin-slow"
              src={reactSvg}
              alt="React logo"
            />
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Inertia + Vite Ruby + React</h2>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mb-4">
            Edit <code className="bg-gray-200 px-1 rounded">app/frontend/pages/InertiaExample.tsx</code> and save to
            test HMR
          </p>
        </div>
        <p className="mt-8 text-gray-600">
          Click on the Inertia, Vite Ruby, and React logos to learn more
        </p>
      </div>
    </>
  )
}
