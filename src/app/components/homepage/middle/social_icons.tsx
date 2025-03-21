import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function SocialIcons() {
  return (
    <div className="mt-2 flex h-20 w-full items-center justify-center gap-12">
      <a
        href="https://www.linkedin.com/in/brenoamorimroman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="size-14 rounded-lg border-2 border-purple-900 bg-white p-2 text-purple-900 transition-all duration-100 ease-in-out hover:border-white hover:bg-purple-900 hover:text-white"></FaLinkedinIn>
      </a>
      <a
        href="https://github.com/AmorimBreno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="size-14 rounded-full rounded-lg text-white transition-all duration-100 ease-in-out hover:border-2 hover:bg-white hover:text-purple-900"></FaGithub>
      </a>
    </div>
  )
}
