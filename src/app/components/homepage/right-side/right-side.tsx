import { BigQuote } from '../left-side/big_quote'
import { SocialIcons } from '../middle/social_icons'

export function RightSide() {
  return (
    <div className="w-2/9 col-span-2 bg-purple-900 px-6 pt-12 font-mono">
      <BigQuote></BigQuote>
      <div className="mt-8 h-[0.5px] w-full rounded-full bg-slate-300"></div>
      <h1 className="mb-4 mt-10 text-2xl font-semibold text-white">
        Interesses
      </h1>
      <h1 className="mt-2 text-sm text-white"> ◈ Design</h1>
      <h1 className="mt-2 text-sm text-white"> ◈ Jogos</h1>
      <h1 className="mt-2 text-sm text-white"> ◈ Esportes</h1>
      <h1 className="mt-2 text-sm text-white"> ◈ Tecnologia</h1>
      <div className="mb-11 mt-11 h-[0.5px] w-full rounded-full bg-slate-300"></div>
      <div className="flex h-80 w-full items-end justify-center">
        <SocialIcons></SocialIcons>
      </div>
    </div>
  )
}
