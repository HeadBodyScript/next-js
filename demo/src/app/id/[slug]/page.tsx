import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
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
  let data = await fetch('https://raw.githubusercontent.com/HeadBodyScript/next-js/refs/heads/main/demo/src/components/json/2.json')
  let posts = await data.json()
  let character = await posts.characters[slug]
  console.log(character)

  return (
  <>
    <Navbar/>
    <main>
      this is page {slug}
      <br></br><br></br>
      <div>
        <Link href="/id/0">Character 0</Link>
        <Link href="/id/1">Character 1</Link>
        <Link href="/id/2">Character 2</Link>
        <Link href="/id/3">Character 3</Link>
        <Link href="/id/4">Character 4</Link>
      </div>
      <br></br>
      Hello world
      {
        // posts.characters.map((item: any) => (
        //   <div key={item.id} className='h-full'>
        //       <div>{item.description}</div>
        //   </div>
        // ))
        <>
        <div>{character.id}</div>
        <div>{character.name}</div>
        <div>{character.description}</div>
        <div>{character.url}</div>
            <Image
      src= {character.url}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </>

      }
    </main>
    <Footer/>
  </>
  )
}