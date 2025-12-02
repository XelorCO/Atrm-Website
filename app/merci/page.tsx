'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MerciPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-secondary-color)',
        padding: '60px 40px',
        borderRadius: '10px',
        boxShadow: 'var(--card-shadow)',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: 'var(--primary-blue)', marginBottom: '20px', fontSize: '2.5rem' }}>
          Message envoyé ! ✅
        </h1>
        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
          Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement.
        </p>
        <p style={{ color: 'var(--text-light-color)' }}>
          Vous allez être redirigé vers la page d&apos;accueil dans 5 secondes...
        </p>
        <p style={{ marginTop: '30px' }}>
          <a href="/" style={{ 
            color: 'var(--primary-blue)', 
            textDecoration: 'underline',
            fontWeight: 600
          }}>
            Retourner à l&apos;accueil maintenant
          </a>
        </p>
      </div>
    </div>
  )
}