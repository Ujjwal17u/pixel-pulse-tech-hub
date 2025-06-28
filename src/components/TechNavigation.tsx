'use client'

import React, { useState, useEffect } from 'react'
import { Home, User, Target, Users, HelpCircle, Award, UserPlus } from 'lucide-react'

const TechNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'tracks', icon: Target, label: 'Tracks' },
    { id: 'identity', icon: Award, label: 'Identity' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'join', icon: UserPlus, label: 'Join' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-tech-dark/90 backdrop-blur-sm rounded-lg p-2 tech-glow border border-tech-orange/20">
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                group relative p-3 rounded-lg transition-all duration-300 hover:scale-110
                ${isActive 
                  ? 'bg-tech-orange tech-glow text-tech-black' 
                  : 'bg-tech-black/50 hover:bg-tech-dark text-tech-gray hover:text-tech-orange'
                }
              `}
            >
              <Icon size={20} className={isActive ? 'animate-glow-pulse' : ''} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-tech-dark rounded text-sm text-tech-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-primary">
                {item.label}
              </div>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default TechNavigation