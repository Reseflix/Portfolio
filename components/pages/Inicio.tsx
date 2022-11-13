import styles from './inicio.module.scss'
import Image from 'next/image'
import Rodrigo from '../../public/test.png'
export default function Inicio(){
    return (
      <div>
        <div className={styles.titulo}>
            <div className={styles.divImg}>
                <Image src={Rodrigo} alt="minha foto" style={{width:'100%',height:'auto'}}></Image>
            </div>
           <div>
            <h1>Bem vindo!</h1>
            <h3>Sou um <span>Fullstack developer</span>.</h3>
           </div>
        </div>
      </div>
    )
  }