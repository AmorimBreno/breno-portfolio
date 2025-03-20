import { LeftSide } from '../components/homepage/left-side/left_side'
import { Middle } from '../components/homepage/middle/middle'
import { RightSide } from '../components/homepage/right-side/right-side'

export function Home() {
  return (
    <main
      style={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        color: 'white'
      }}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-24 md:py-0"
    >
      <div className="grid h-screen w-full grid-cols-11">
        <LeftSide></LeftSide>
        <Middle></Middle>
        <RightSide></RightSide>
      </div>
    </main>
  )
}
