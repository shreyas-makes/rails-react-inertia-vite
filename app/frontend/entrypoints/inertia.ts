import { createInertiaApp } from '@inertiajs/react'
import { createElement, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

type Component = { default: ReactNode & { layout?: (page: ReactNode) => ReactNode } }

createInertiaApp({
  // Set default page title
  // see https://inertia-rails.netlify.app/guide/title-and-meta
  //
  // title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  //
  // see https://inertia-rails.netlify.app/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
    return pages[`../pages/${name}.tsx`] as Component

    // To use a default layout, import the Layout component
    // and use the following lines.
    // see https://inertia-rails.netlify.app/guide/pages#default-layouts
    //
    // const page = pages[`../pages/${name}.tsx`] as Component
    // page.default.layout ||= (page) => createElement(Layout, null, page)
    // return page
  },

  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(createElement(App, props))
  },
})
