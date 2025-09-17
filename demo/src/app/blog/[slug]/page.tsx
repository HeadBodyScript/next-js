import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"
// import Item from "@/components/json/1.json"

// function generateStaticParams() {}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // const post = await getPost(slug)
  // console.log(slug)
  let data = await fetch('https://raw.githubusercontent.com/HeadBodyScript/next-js/refs/heads/main/demo/src/components/json/' + slug + '.json')
  let posts = await data.json()
   console.log(posts)

  return (
  <>
    <Navbar/>
    <main>
      this is page {slug}
      <br></br>
      Hello world
      <div>
        <Link href="/blog/1">Json 1</Link>
        <Link href="/blog/2">json 2</Link>

      </div>
      {
        posts.characters.map((item: any) => (
          <div key={item.id} className='h-full'>
              <div>{item.description}</div>
          </div>
        ))
      }
    </main>
    <Footer/>
  </>
  )
}