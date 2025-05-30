
import { useState, useEffect } from 'react'
import { getReactions, toggleReaction, EMOJI_MAP } from '@/lib/reactions'

export default function useReactions(postId) {
  const [summary, setSummary] = useState({})
  const [userReacted, setUserReacted] = useState([]) 

  useEffect(() => {
    getReactions(postId).then(({ summary, userReacted }) => {
      setSummary(summary)
      setUserReacted(userReacted)
    })
  }, [postId])

  const toggle = async type => {
    const { action, total } = await toggleReaction(postId, type)
    setSummary(prev => ({ ...prev, [type]: total }))
    setUserReacted(prev =>
      action === 'added' ? [...prev, type] : prev.filter(t => t !== type)
    )
  }

  return { summary, userReacted, toggle, EMOJI_MAP }
}
