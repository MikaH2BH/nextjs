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
          <p>
              Hier komt mijn verhaal. Ik ben Mango en ik ben heel boos op Dierenkliniek Maastricht. 
              Mijn baasje had bijna mijn pootje willen amputeren of mij zelfs laten inslapen.
          </p>
        </div>
        <div>
          <video controls src={"/mango.mp4"} style={{ width: "100%" }} />
        </div>
          
        <div>
          
        </div>
      </div>

    </main>
  )
}
