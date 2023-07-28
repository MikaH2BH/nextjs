import Image from 'next/image'
import styles from './page.module.css'


import React from 'react'
import ReactPlayer from 'react-player'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4" style={{ width: "100%" }}>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><strong>Verhaal van Mango</strong></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><strong>Andere klachten</strong></a>
            </li>
            
          </ul>
        </div>
      </nav>
      <div class="row justify-content-center">
        <div class='col-10'>
          <h1>Boos op Dierenkliniek Maastricht</h1>
        </div>
        <div class='col-10'>
          <p>
              Hier komt mijn verhaal. Ik ben Mango en ik ben heel boos op Dierenkliniek Maastricht in Heer. 
              Mijn baasje had bijna mijn pootje laten amputeren of mij zelfs laten inslapen op advies van Dierenkliniek Maastricht in Heer en Dierenkliniek AniCura in Hasselt, zoals je later kunt zien was dit helemaal niet nodig!
          </p>
        </div>
        <div class='col-10'>
          <video controls src={"/mango.mp4"} style={{ width: "100%" }} />
        </div>
          
        <div>
          
        </div>
      </div>

    </main>
  )
}
