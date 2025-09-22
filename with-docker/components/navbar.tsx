"use client";
import Link from 'next/link'

// interface NavbarProps {
//    user: any;
// }
// const Navbar = (user: any) => {
const Navbar = () => {

  // console.log("user")
  // console.log(user)
  // console.log("user")
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-gray-500 text-sm" href="/projects"><span className="sr-only">Home</span></Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  {/* <Link className={`text-gray-500 text-[5px] ${headbodyscriptFont.className}`} href="/">headbodyscript</Link> */}
                  <Link className={`text-gray-500 text-[5px]}`} href="/">headbodyscript</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/">Home</Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
            <div aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  
                  
                </li>
              </ul>
            </div>
            

            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
