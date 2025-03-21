export function LongText(props: { title: string; text: string; icon: any }) {
  return (
    <div>
      <div className="mt-8 flex flex-row gap-2 pt-1">
        {props.icon}

        <h1 className="text-purple-900">{props.title}</h1>
      </div>
      <p className="w-full pt-4 text-sm">{props.text}</p>
    </div>
  )
}
