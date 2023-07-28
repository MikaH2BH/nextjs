import Image from 'next/image'
import styles from './page.module.css'


import React from 'react'
import ReactPlayer from 'react-player'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div>
          <h1>Boos op Dierenkliniek Maastricht</h1>
        </div>
        <div>
          <h6>
              Hier komt mijn verhaal. Ik ben Mango en ik ben heel boos op Dierenkliniek Maastricht. 
              Mijn baasje had bijna mijn pootje willen amputeren of mij zelfs laten inslapen.
          </h6>
        </div>
        <div>
          <ReactPlayer url='/public/mango.mp4' />
        </div>
          
        <div>
          
        </div>
      </div>

    </main>
  )
}
