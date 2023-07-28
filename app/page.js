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
              Mijn baasje had bijna mijn pootje laten amputeren of mij zelfs laten inslapen op advies van Dierenkliniek Maastricht in Heer en Dierenkliniek AniCura in Hasselt, zoals je later kunt zien was dit helemaal niet nodig!
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
