'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.85)',
          zIndex: 0,
        }}
      />

      {/* Header with centered title */}
      <header
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '1.5rem 1rem 0.5rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{
          margin: 0,
          fontSize: '3rem',
          fontWeight: '800',
          color: '#1a202c', // dark gray
        }}>
          Compeers Bookshop
        </h1>
        <div style={{ position: 'absolute', top: '1.5rem', right: '2rem' }}>
          <Link
            href="/customer/register"
            style={{
              fontWeight: 'bold',
              fontSize: '1rem',
              color: '#3b82f6',
              textDecoration: 'none',
            }}
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main login form */}
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          padding: '2rem',
        }}
      >
        <form
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '320px',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>User Login</h2>
          <input
            type="text"
            placeholder="Username"
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              padding: '0.7rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Log In
          </button>
        </form>
      </main>
    </div>
  );
}
