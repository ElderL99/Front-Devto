
'use client'

import { useMemo } from 'react'

/**
 * Genera la URL de avatar para un usuario.
 *
 * @param {string|number} seed  Algo único: _id, email, username...
 * @param {number} size         Tamaño en px (default 40)
 * @returns {string}            URL lista para <Image src=.../>
 */
export default function useAvatarUrl(seed, size = 40) {
  return useMemo(() => {
    const safeSeed =
      seed ?? Math.random().toString(36).slice(2) // un random
    return `https://i.pravatar.cc/${size}?u=${encodeURIComponent(safeSeed)}`
  }, [seed, size])
}
