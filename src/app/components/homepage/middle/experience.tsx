import { FaSuitcase } from 'react-icons/fa'

export function Experience(props: {
  title: string
  text: string
  year_start: string
  year_end: string
  competence1: string
  competence2: string
  competence3: string
  competence4: string
}) {
  return (
    <div className="ml-6 mr-6 mt-8 text-justify">
      <div className="flex flex-row justify-between gap-2 pt-1">
        <div className="flex flex-row gap-2 pt-1">
          <FaSuitcase className="size-5 text-purple-900"></FaSuitcase>
          <h1 className="text-purple-900">{props.title}</h1>
        </div>

        <h1 className="text-purple-900">
          {props.year_start}/{props.year_end}
        </h1>
      </div>
      <p className="mb-2 w-full pt-4 text-sm">{props.text}</p>
      <div className="flex flex-row gap-2">
        <Competence competence={props.competence1}></Competence>
        <Competence competence={props.competence2}></Competence>
        <Competence competence={props.competence3}></Competence>
        <Competence competence={props.competence4}></Competence>
      </div>
    </div>
  )
}

export function Competence(props: { competence: string }) {
  return (
    <div className="h-8 rounded-lg bg-purple-400 p-2 text-white">
      <p className="text-center text-sm">{props.competence}</p>
    </div>
  )
}
