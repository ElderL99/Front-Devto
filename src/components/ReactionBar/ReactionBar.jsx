'use client'
import useReactions from '@/hooks/useReactions'
import clsx from 'clsx'

export default function ReactionBar({ postId, condensed = false }) {
  const { summary, userReacted, toggle, EMOJI_MAP } = useReactions(postId)

  /* pone sólo los que tengan conteo > 0  */
  const types = Object.keys(EMOJI_MAP)

  return (
    <div className="flex gap-4 text-xl select-none">
      {types.map(type => {
        const count = summary[type] || 0
        if (condensed && count === 0) return null

        return (
          <button
            key={type}
            onClick={() => toggle(type)}
            className={clsx(
              'flex items-center gap-1 hover:scale-110 transition',
              userReacted.includes(type) && 'opacity-100',
              !userReacted.includes(type) && 'opacity-60 hover:opacity-100'
            )}
          >
            <span>{EMOJI_MAP[type]}</span>
            <span className="text-sm">{count}</span>
          </button>
        )
      })}
    </div>
  )
}
