import { useState, useEffect } from 'react'
import { api } from '../lib/api'

interface IMMember {
  id: string
  name: string
}

export function useIMMembers() {
  const [members, setMembers] = useState<IMMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/profiles/im-members')
      .then((data) => setMembers(data))
      .catch(() => setMembers([]))
      .finally(() => setLoading(false))
  }, [])

  return { members, loading }
}
