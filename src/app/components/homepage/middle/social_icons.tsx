import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function SocialIcons() {
  return (
    <div className="mt-8 flex h-20 w-full items-center justify-center gap-12">
      <FaLinkedinIn className="size-14 rounded-lg bg-purple-900 p-2 text-white hover:size-16"></FaLinkedinIn>
      <FaGithub className="size-14 rounded-lg text-purple-900 hover:size-16"></FaGithub>
    </div>
  )
}

export function Icon(icon: any) {
  return <div>{icon}</div>
}
