import { Inter } from 'next/font/google'
import DolzanHeader from './header'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <DolzanHeader></DolzanHeader>

      <div>
        <h1 className="text-4xl text-center font-bold pt-4 pb-4">
          O que é Reprogramação Genética?
        </h1>
      </div>

      <div>
        <h1 className="text-4xl text-center font-bold pt-4 pb-4">
          Como isso funciona? Assita o vídeo abaixo:
        </h1>
      </div>

      <div>
        <iframe src='https://www.youtube.com/embed/cxmMD5OvYRQ' 
        className="mx-auto flex items-center aspect-video h-full w-[80%] max-w-full"
        allowFullScreen>
        </iframe>
      </div>

      <div>
        <h1 className="text-4xl text-center font-bold pt-4 pb-4">
          Mude agora a <span className="text-red-600">sua vida</span>
        </h1>
      </div>

      <div className="text-2xl text-center font-bold pt-4 pb-4">
        <Link target="_blank" href="https://www.youtube.com/watch?v=cxmMD5OvYRQ">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <h1 className="text-2xl text-center">Quero reprogramar</h1>
            <h1 className="text-2xl text-center">minha genética!</h1>
          </button>
        </Link>
      </div>

    </div>
  )
}
