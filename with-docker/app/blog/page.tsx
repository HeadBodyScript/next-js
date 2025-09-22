// import Item from "@/components/json/1.json"
import Link from "next/link"

export default function Page() {
  // console.log(Item)
  return (
  <>
    <main>

      Hello world
      <div>
        <Link href="/blog/1">Json 1</Link>
        <Link href="/blog/2">json 2</Link>

      </div>
      {/* {
        Item.characters.map((item: any) => (
          <div key={item.id} className='h-full'>
              <div>{item.description}</div>
          </div>
        ))
      } */}
    </main>
  </>
  )
}