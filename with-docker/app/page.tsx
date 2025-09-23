import Link from 'next/link'
export default function Page() {
  return (
  <>
    <main>
      Hello world
      <Link href="/id">Id</Link>
      <br /><br />
      <Link href="/blog">blog</Link>
    </main>
  </>
  )
}