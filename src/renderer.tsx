import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <Link href="/src/styles/app.css" rel="stylesheet" />
        <script type="module" src="/datastar/v1.0.0-RC.8/datastar.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
})
