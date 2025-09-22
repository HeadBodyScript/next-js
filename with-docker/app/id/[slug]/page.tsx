
import Link from "next/link"
import Image from "next/image"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  const data = await fetch('https://raw.githubusercontent.com/HeadBodyScript/next-js/refs/heads/main/demo/src/components/json/2.json')
  const posts = await data.json()
  const character = await posts.characters[slug]
  console.log(character)
  
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
  <>
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
        <>
        <div>{character.id}</div>
        <div>{character.name}</div>
        <div>{character.description}</div>
        <div>{character.url}</div>
        {/* <img src={character.url} alt="" height={200} width={200}/> */}
          <Image
            priority
            placeholder="data:image/404-img.webp"
            // src= {character.url}
            src= "/file.svg"
            width={200}
            height={200}
            alt="Picture of character"
            quality={1}
          />
        </>

      }
    </main>
  </>
  )
}