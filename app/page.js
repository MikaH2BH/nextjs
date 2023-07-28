import Image from 'next/image'
import styles from './page.module.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={row}>
            <h1>Boos op Dierenkliniek Maastricht</h1>
            <h5>
                Hier komt mijn verhaal. Ik ben Mango en ik ben heel boos op Dierenkliniek Maastricht. 
                Mijn baasje had bijna mijn pootje willen amputeren of mij zelfs laten inslapen.
            </h5>
          </div>
        <div>
          
        </div>
      </div>

    </main>
  )
}
