
import api from './api'

export const getReactions = (postId) =>
    api.get(`/reactions/summary/${postId}`).then((r) => r.data)
  

export const toggleReaction = (postId, type) =>
  api.post('/reactions/toggle', { post: postId, type }).then(r => r.data)

export const EMOJI_MAP = {
  heart: '❤️',
  unicorn: '🦄',
  mind_blown: '🤯',
  raised_hands: '🙌',
  fire: '🔥',
}
