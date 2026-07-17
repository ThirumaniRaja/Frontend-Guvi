import { useState, useMemo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const initialProjects = [
  { id: 1, title: 'Personal Website', desc: 'Responsive portfolio site with animations.', tags: ['web', 'html', 'css'], date: '2026-02-10', link: '#' },
  { id: 2, title: 'Task Manager App', desc: 'Vanilla JS app demonstrating state & storage.', tags: ['js', 'app'], date: '2026-03-21', link: '#' },
  { id: 3, title: 'E‑commerce UI', desc: 'Design system & components built with CSS grid.', tags: ['design', 'css'], date: '2025-11-01', link: '#' },
  { id: 4, title: 'Data Viz Dashboard', desc: 'Interactive charts and filters.', tags: ['d3', 'js'], date: '2026-01-05', link: '#' },
  { id: 5, title: 'Mobile Game Prototype', desc: 'Simple canvas game prototype.', tags: ['game', 'canvas', 'js'], date: '2024-08-14', link: '#' },
  { id: 6, title: 'API Integration', desc: 'Demo of fetching, caching and error handling.', tags: ['api', 'js'], date: '2026-06-30', link: '#' }
]

function formatDate(d){ try { return new Date(d).toLocaleDateString() } catch { return d } }

export default function App(){
  const [projects] = useState(initialProjects)
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(null)
  const [sort, setSort] = useState('recent')
  const [open, setOpen] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const onKey = (e) => { if(e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  },[])

  const tags = useMemo(()=>{
    const s = new Set(); projects.forEach(p=>p.tags.forEach(t=>s.add(t))); return [...s].sort()
  },[projects])

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    let list = projects.filter(p=>{
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true
      const combined = (p.title + ' ' + p.desc + ' ' + p.tags.join(' ')).toLowerCase()
      const matchesQuery = q ? combined.includes(q) : true
      return matchesTag && matchesQuery
    })
    if(sort === 'alpha') list = list.slice().sort((a,b)=>a.title.localeCompare(b.title))
    else list = list.slice().sort((a,b)=> new Date(b.date) - new Date(a.date))
    return list
  },[projects, query, activeTag, sort])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Portfolio Explorer</h1>
          <p className="muted">Search, filter and open projects.</p>
        </div>

        <div className="pe-controls">
          <input aria-label="Search" placeholder="Search projects..." value={query} onChange={e=>setQuery(e.target.value)} />
          <select aria-label="Sort" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="recent">Most recent</option>
            <option value="alpha">A → Z</option>
          </select>
        </div>

        <div className="pe-filters" role="toolbar" aria-label="Tags">
          <button className={`pe-tag ${activeTag===null?'active':''}`} onClick={()=>setActiveTag(null)}>All</button>
          {tags.map(t=>(
            <button key={t} className={`pe-tag ${activeTag===t?'active':''}`} onClick={()=>setActiveTag(cur => cur===t ? null : t)}>{t}</button>
          ))}
        </div>

        <button type="button" className="counter" onClick={()=>setCount(c=>c+1)}>Count is {count}</button>
      </section>

      <div className="ticks" />

      <main>
        <div className="pe-grid" role="list" aria-live="polite">
          {filtered.length === 0 ? <div className="pe-empty">No projects match.</div> :
            filtered.map(p=>(
              <article key={p.id} tabIndex={0} role="listitem" className="pe-card"
                onClick={()=>setOpen(p)} onKeyDown={e=>{ if(e.key==='Enter') setOpen(p) }}>
                <h3>{p.title}</h3>
                <p className="pe-desc">{p.desc}</p>
                <div className="pe-meta">
                  <span className="pe-date">{formatDate(p.date)}</span>
                  <div className="pe-tags">{p.tags.map(t=> <span key={t} className="pe-small-tag">{t}</span>)}</div>
                </div>
              </article>
            ))
          }
        </div>
      </main>

      {open && (
        <div className="pe-modal" role="dialog" aria-modal="true" aria-label={`${open.title} details`} onClick={e => { if(e.target.classList.contains('pe-modal')) setOpen(null) }}>
          <div className="pe-modal-content">
            <button className="pe-close" onClick={()=>setOpen(null)} aria-label="Close">×</button>
            <h2>{open.title}</h2>
            <p>{open.desc}</p>
            <div className="pe-tags-row">{open.tags.map(t=> <span key={t} className="pe-small-tag">{t}</span>)}</div>
            <div className="pe-links"><a href={open.link} target="_blank" rel="noreferrer">View project</a></div>
          </div>
        </div>
      )}

      <div className="ticks" />
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" aria-hidden="true"><use href="/icons.svg#documentation-icon" /></svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li><a href="https://vite.dev/" target="_blank"><img className="logo" src={viteLogo} alt="" /> Explore Vite</a></li>
            <li><a href="https://react.dev/" target="_blank"><img className="button-icon" src={reactLogo} alt="" /> Learn more</a></li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" aria-hidden="true"><use href="/icons.svg#social-icon" /></svg>
          <h2>Connect</h2>
          <p>Join the community</p>
        </div>
      </section>

      <div className="ticks" />
      <section id="spacer" />
    </>
  )
}