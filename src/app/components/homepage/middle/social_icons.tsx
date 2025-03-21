import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function SocialIcons() {
  return (
    <div className="mt-8 flex h-20 w-full items-center justify-center gap-12">
      <a
        href="https://www.linkedin.com/in/brenoamorimroman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="size-14 rounded-lg border-purple-900 bg-purple-900 p-2 text-white transition-all duration-100 ease-in-out hover:border-2 hover:bg-white hover:text-purple-900"></FaLinkedinIn>
      </a>
      <a
        href="https://github.com/AmorimBreno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="size-14 rounded-lg text-purple-900 transition-all duration-100 ease-in-out hover:rounded-full hover:border-2 hover:bg-purple-900 hover:text-white"></FaGithub>
      </a>
    </div>
  )
}

export function Icon(icon: any) {
  return <div>{icon}</div>
}
