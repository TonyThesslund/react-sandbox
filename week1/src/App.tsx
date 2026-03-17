import { TeamCard } from './components/TeamCard'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
        Welcome to React!
      </h1>

      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="flex justify-center gap-4">
          <TeamCard name="Tony Thesslund" role="Project Manager" />
        </div>
        <div className="flex justify-center gap-4">
          <TeamCard name="Bob" role="Frontend Developer" />
          <TeamCard name="Charlie" role="Backend Developer" />
          <TeamCard name="Alice" role="QA Engineer" />
        </div>
      </div>
    </main>
  )
}


