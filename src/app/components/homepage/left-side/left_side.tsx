import imageMan from '../../../../../public/imageMan.jpg'
import imageMe from '../../../../imageMinha.jpg'

export function LeftSide() {
  return (
    <div className="w-2/9 relative col-span-3 overflow-hidden bg-purple-100">
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-slate-50/0 to-purple-900"></div>
      <div className="absolute bottom-0 flex h-1/5 w-full flex-col items-center justify-center">
        <h1 className="mb-2 font-mono text-3xl text-white">Breno Amorim</h1>
        <h1 className="text-md font-mono text-white">
          23 anos - SP, São Paulo
        </h1>
        <div className="mt-4 h-[1px] w-2/4 rounded-full bg-white"></div>
        <h1 className="text-md mt-4 font-mono text-white">
          Estudante de Engenharia de Computação
        </h1>
      </div>
      <img src={imageMe} className="w-254 h-full object-cover"></img>
    </div>
  )
}
