import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Item from "@/components/json/1.json"


export default function Page() {
  console.log(Item)
  return (
  <>
    <Navbar/>
    <main>
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