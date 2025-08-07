'use client'

import React, { useState } from "react"

const Terminal = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'skills'>('about')

  const tabButtonClass = (tab: string) =>
    `bg-[#0B0B0B] border border-[#151515] flex items-center justify-center px-3 py-1 text-sm rounded-md w-[80px] md:w-[192px]
     ${activeTab === tab ? 'text-white bg-[#151515]' : 'text-[#8B8B8B] hover:text-white hover:bg-[#1c1c1c]'}`

  return (
    <div className='relative z-10'>
      <div className="max-w-4xl mx-auto mt-16 rounded-xl shadow-lg bg-[#0f0f0f]/90 backdrop-blur border border-white/10 text-gray-100 font-mono w-11/12 md:w-full">
        {/* Header estilo macOS */}
        <div className="flex items-center gap-4 px-4 py-2 border-b border-white/10">
          {/* Botones macOS */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Tabs estilo Warp */}
          <div className="flex gap-2">
            <button className={tabButtonClass('about')} onClick={() => setActiveTab('about')}>
              <span className="md:hidden">
                1
              </span>
              <span className="hidden md:inline-block">
                About me
              </span>
            </button>
            <button className={tabButtonClass('experience')} onClick={() => setActiveTab('experience')}>
              <span className="md:hidden">
                2
              </span>
              <span className="hidden md:inline-block">
                Work experience
              </span>
            </button>
            <button className={tabButtonClass('skills')} onClick={() => setActiveTab('skills')}>
              <span className="md:hidden">
                3
              </span>
              <span className="hidden md:inline-block">
                Skills
              </span>
            </button>
          </div>
        </div>

        {/* Contenido del tab activo */}
        <div className="px-4 py-6 text-sm leading-relaxed text-gray-200 h-[650px] overflow-y-auto">
          {activeTab === 'about' && (
            <pre className="whitespace-pre-wrap w-10/12">
              Starting ...<br /><br />
              About me loaded!<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__  __      __          __<br />
              &nbsp;&nbsp;&nbsp;&nbsp;/ / / /___  / /___ _    / /<br />
              &nbsp;&nbsp;&nbsp;/ /_/ / __ \/ / __ `/   / / <br />
              &nbsp;&nbsp;/ __  / /_/ / / /_/ /   /_/  <br />
              &nbsp;/_/ /_/\____/_/\__,_/   (_)  <br />
              <br /><br />
              Me llamo Diego y en algunos lugares de la red me llaman diegokaiser.
              Empecé a trabajar como <span className='text-[#B7F765]'>diseñador publicitario</span>, rodeado de programadores y mucha curiosidad de quienes aprendí mucho y empecé mis promeros pasos en el mnundo de la programción.
              <br /><br />
              Al día de hoy llevo varios años trabajando como <span className='text-[#B7F765]'>frontend developer</span> y no descarto dar el pase a <span className='text-[#B7F765]'>fullstack</span>.
            </pre>
          )}
          {activeTab === 'experience' && (
            <pre className="whitespace-pre-wrap w-10/12">
              Starting...<br /><br />
              Job experience loaded!<br /><br />

              <strong>Ayesa</strong><br />
              Frontend Developer<br />
              Madrid
              <br /><br />

              <strong>MYM</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Liquid</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Yanbal INT</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Seidor</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Wunderman Thompson</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Whiz Brands</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Grupo Taisa - Cardumen</strong><br />
              Frontend Developer<br />
              Lima
              <br /><br />

              <strong>Ministerio de Vivienda, Construcción y Saneamiento</strong><br />
              Web designer<br />
              Lima
              <br /><br />

              <strong>Pontificia Universidad Católica del Perú</strong><br />
              Web designer<br />
              Lima
              <br /><br />
            </pre>
          )}
          {activeTab === 'skills' && (
            <pre className="whitespace-pre-wrap w-10/12">
              Starting...<br /><br />
              Skills loaded!<br /><br />

              React             [=======================         ] (4y)<br />
              Vue               [===============                 ] (2y)<br />
              Angular           [===============                 ] (2y)<br />
              Nextjs            [===============                 ] (2y)<br /><br />

              Javascript        [================================] (6y)<br />
              Typescript        [=======================         ] (4y)<br /><br />

              Atomic Design     [==================              ] (3y)<br />
              SCSS              [================================] (6y)<br />
              Tailwind          [=======================         ] (4y)<br />
              Storybook         [===============                 ] (2y)<br />

              Axios             [=======================         ] (4y)<br />
              ReactQuery        [===============                 ] (2y)<br /><br />

              Vite.             [=======================         ] (4y)<br /><br />

              Git/Gitflow.      [=======================         ] (4y)<br /><br />

              Microfrontends    [===============                 ] (2y)<br /><br />

              Figma             [================================] (6y)<br />
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}

export default Terminal