import styles from './inicio.module.scss'
import Image from 'next/image'
import Rodrigo from '../../public/rodrigo.png'
export default function Inicio(){
    return (
      <div className={styles.titulo}>
        <div className={styles.divImg}>
          <Image src={Rodrigo} alt="minha foto" style={{width:'100%',height:'auto'}}/>
        </div>
        <div>
          <h1>Bem vindo!</h1>
          <h2>Meu nome é Rodrigo Batista!</h2>
          <h3>e sou um <span>Fullstack developer</span>.</h3>
        </div>
      </div>
    )
  }