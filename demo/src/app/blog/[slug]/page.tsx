import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Item from "@/components/json/1.json"

// function generateStaticParams() {}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // const post = await getPost(slug)
  // console.log(slug)
  let data = await fetch('./components/json/'+ slug)
  let posts = await data.json()
   console.log(posts)

  return (
  <>
    <Navbar/>
    <main>
      this is page {slug}
      <br></br>
      Hello world
      {
        Item.characters.map((item: any) => (
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