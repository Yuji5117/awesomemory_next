export const metadata = {
  title: 'Awesomemory',
  description: 'This is Awesomemory app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='jp'>
      <body>{children}</body>
    </html>
  )
}
