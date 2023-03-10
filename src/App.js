import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import articles from './data'

const getStoredTheme = ()=>{
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }

  return theme
}
function App() {

  const [theme, setTheme] = useState(getStoredTheme())

  const toggleTheme = ()=>{
    if(theme === 'light-theme'){

      setTheme('dark-theme')
    }else{
      setTheme('light-theme')

    }
  }

  useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <main>
    <nav>
      <div className='nav-center'>
        <h1>overreacted</h1>
        <button className="btn" onClick={toggleTheme}>toggle</button>
      </div>
    </nav>

    <section className="article">
      {data.map((item)=>{
        return <Article key={item.id} {...item}/>
      })}
    </section>
  </main>
}

export default App
