export function Loading(props: { tamanho: number }) {
  return (
    <div className="relative mb-3 mt-3">
      <div
        className={
          'absolute h-2 w-48 rounded-lg border-2 border-purple-400 bg-purple-400'
        }
      ></div>
      <div
        className={`absolute h-2 rounded-lg border-2 border-purple-900 bg-purple-900 ${
          {
            1: 'w-6',
            2: 'w-12',
            3: 'w-16',
            4: 'w-20',
            5: 'w-24',
            6: 'w-28',
            7: 'w-32',
            8: 'w-36',
            9: 'w-40',
            10: 'w-48'
          }[props.tamanho]
        }`}
      ></div>
    </div>
  )
}
