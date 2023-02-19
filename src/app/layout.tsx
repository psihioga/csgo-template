import { Background } from '@/components/Background'
import { Header } from '@/components/header/Header'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-csgo text-white p-20'>
        <Background />
        <main className='bg-main rounded-md'>
          <Header />  
          {children}
        </main>
      </body>
    </html>
  )
}
