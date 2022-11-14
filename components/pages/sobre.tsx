import styles from './sobre.module.scss'
import Image from 'next/image'
import Rodrigo from '../../public/rodrigo2.jpg'

export default function Sobre(){
    return (
        <div className={styles.sobre}>
            <div className={styles.divImg}>
                <Image src={Rodrigo} alt="minha foto" style={{width:'100%',height:'auto'}}/>
            </div>
            <div className={styles.informacoes}>
                <ul>
                    <li>Nome: Rodrigo Batista</li>
                    <li>Idade: 23</li>
                    <li>Data de Nascimento: 03/01/1999</li>
                    <li>Bairro: JARDIM DAS ROSAS</li>
                    <li>Cidade: São Paulo - SP</li>
                    <li>Telefone celular/Whatsapp: (11) 987980079</li>
                </ul>
            </div>
        </div>
    )
  }