import { useState } from 'react'

interface CardProps {
  name: string
  role: string
}

export function TeamCard({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0)

  return (
    <article className="w-full max-w-xs rounded-xl bg-white p-6 text-center shadow-lg ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-slate-800">{name}</h2>
      <p className="mt-1 text-sm text-slate-600">{role}</p>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setVotes((currentVotes) => currentVotes + 1)}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Vote ({votes})
        </button>
      </div>
    </article>
  )
}
