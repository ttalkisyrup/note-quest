import NoteQuiz from '@/components/NoteQuiz'

export default function RootPage() {
  return (
    <main>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <NoteQuiz />
      </div>
    </main>
  )
}
