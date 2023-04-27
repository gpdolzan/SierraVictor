import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import svgLogo from '../public/svgLogo.svg'

const inter = Inter({ subsets: ['latin'] })

export default function DolzanHeader() {
  return (
    <div className={"mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
      <div className="grow">
        <div className="flex items-center justify-center gap-5">
          <Image priority src={svgLogo} height={64} width={64} alt="Logo"/>
          <div>
            <Link href="/">
              <h1 className="font-bold text-2xl">Reprogramação</h1>
              <h1 className="font-bold text-2xl text-center">Genética</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}