'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/admin/dashboard')
      router.refresh()
    } catch (e: any) {
      setError(e.message || 'Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Panneau d&apos;Administration</h1>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="admin-form-container">
          <h3>Connexion</h3>

          {error && (
            <div style={{ 
              padding: '15px', 
              background: '#fee', 
              color: '#c33', 
              borderRadius: '5px', 
              marginBottom: '20px' 
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="contact-form-modern">
            <div className="form-group-modern full-width">
              <input
                type="email"
                id="login-email"
                className="form-input-modern"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                suppressHydrationWarning
              />
              <label htmlFor="login-email" className="form-label-modern">
                Email
              </label>
            </div>

            <div className="form-group-modern full-width">
              <input
                type="password"
                id="login-password"
                className="form-input-modern"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                suppressContentEditableWarning
              />
              <label htmlFor="login-password" className="form-label-modern">
                Mot de passe
              </label>
            </div>

            <div className="full-width">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Connexion...' : 'Se Connecter'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}