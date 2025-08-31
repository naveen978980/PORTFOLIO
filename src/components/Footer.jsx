import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-sm">
      <p>© {new Date().getFullYear()} Naveen Kumar. All rights reserved.</p>
    </footer>
  )
}
