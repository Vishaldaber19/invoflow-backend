import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const roles = [
  {
    emoji: '🎬',
    title: 'Creator',
    description: 'Submit invoices, track payment status in real-time',
    path: '/auth/creator',
  },
  {
    emoji: '👥',
    title: 'IM Team',
    description: 'Review, approve or reject assigned invoices',
    path: '/auth/im',
  },
  {
    emoji: '💼',
    title: 'Accounts',
    description: 'Process payments and manage payout queue',
    path: '/auth/accounts',
  },
]

export default function LandingPage() {
  const { profile, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && profile?.role) {
      navigate(`/dashboard/${profile.role}`)
    }
  }, [loading, profile, navigate])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-bg"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
        `,
        backgroundSize: '60px 60px, 60px 60px, 100% 100%',
      }}
    >
      {/* Brand mark */}
      <div className="w-14 h-14 rounded-r-2 flex items-center justify-center mb-6 bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/20">
        <span className="text-white font-bold text-xl tracking-tight">IF</span>
      </div>

      {/* Title */}
      <h1
        className="text-5xl sm:text-6xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
      >
        InvoFlow
      </h1>

      {/* Subtitle */}
      <p className="text-text-2 text-center max-w-md mb-12 text-lg">
        Invoice management for influencer marketing — no more WhatsApp chaos.
      </p>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {roles.map((role) => (
          <Link
            key={role.title}
            to={role.path}
            className="group bg-bg-3 border border-white/[0.06] rounded-r-2 p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent-border relative"
          >
            <span className="absolute top-4 right-4 text-text-3 text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              &#x2197;
            </span>
            <span className="text-2xl mb-3 block">{role.emoji}</span>
            <h3 className="text-text font-semibold mb-1">{role.title}</h3>
            <p className="text-text-3 text-sm leading-relaxed">{role.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
