import React from 'react'

export default function Navbar({ onToggleTheme, theme }) {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certs', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/60 backdrop-blur border-b border-slate-200/50 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Naveen Kumar</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-brand-500">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-1 text-sm hover:shadow-soft"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <a href="#contact" className="hidden sm:inline-block rounded-xl bg-brand-600 text-white px-4 py-2 text-sm hover:bg-brand-700 shadow-soft">Hire Me</a>
        </div>
      </nav>
    </header>
  )
}
