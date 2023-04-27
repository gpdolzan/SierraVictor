import { Inter } from 'next/font/google'
import DolzanHeader from './header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <DolzanHeader></DolzanHeader>

      <div>
        <h1 className="text-4xl text-center font-bold pt-4 pb-4">O que é Reprogramação Genética?</h1>
      </div>

      <div>
        <iframe src='https://www.youtube.com/embed/cxmMD5OvYRQ' 
        className="mx-auto flex items-center aspect-video h-full w-[80%] max-w-full"
        allowFullScreen>
        </iframe>
      </div>

    </div>
  )
}
