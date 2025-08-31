import React from 'react'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
              {e.degree ? (
                <>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm mt-1">{e.institute}</p>
                  <p className="text-xs text-slate-500 mt-1">{e.period}</p>
                  <p className="text-sm mt-2">{e.cgpa}</p>
                </>
              ) : (
                <>
                  <h3 className="font-semibold">{e.level}</h3>
                  <p className="text-sm mt-2">{e.score}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
