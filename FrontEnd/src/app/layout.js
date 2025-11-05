import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Eunoia</title>
      </head>
      <body className="bg-gradient-to-b from-[#DFADD2] to-[#7E5BD2]">
        <header>
          <nav className='w-full bg-[#DACBEA] py-3 shadow-md'>
            <ul className='flex justify-center list-none p-0 m-0'>
              <li>
                <Link href='/' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Home</Link>
              </li>
              <li>
                <Link href='/chat' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Chat</Link>
              </li>
              <li>
                <Link href='/forums' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Forums</Link>
              </li>
              <li>
                <Link href='/profile' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Profile</Link>
              </li>
              <li>
                <Link href='/sign-up' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Create an Account</Link>
              </li>
              <li>
                <Link href='/sign-in' className='text-white hover:text-[#CDA7E2] px-5 py-2 text-lg font-semibold transition-colors duration-300'>Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className='text-white flex-grow container mx-auto p-4'>
          {children}
        </section>
        <footer className='text-center py-4 text-white text-sm'>
          Copyright Damia 2025
        </footer>
      </body>
    </html>
  );
}
