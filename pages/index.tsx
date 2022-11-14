import styles from '../styles/Home.module.scss'
import { AiFillHome, AiFillIdcard, AiFillTool, AiOutlineQuestion, AiTwotoneHeart, AiOutlineDown, AiOutlineCaretRight, AiOutlineCaretLeft, AiFillProject } from 'react-icons/ai'
import { useState } from 'react'
import Inicio from '../components/pages/Inicio'
import Habilidades from '../components/pages/habilidades'
import Sobre from '../components/pages/sobre'

export default function Home() {

  const menuList = [
    {text:'Inicio',icon:AiFillHome, content: <Inicio/>, color:'white', colordiv:'#8338ec'},
    {text:'Sobre',icon:AiFillIdcard,  content: <Sobre/>},
    {text:'Projetos',icon:AiFillProject},
    {text:'Habilidades',icon:AiFillTool, content: <Habilidades/>},
    {text:'Futuro',icon:AiOutlineQuestion},
    {text:'Inspirações',icon:AiTwotoneHeart}
  ]

  const [actived,setActived] = useState(0)

  function cardActive(event:any){
    setActived(event.currentTarget.dataset.id)
  }

  function Card(props:any){
    return (
      <div className={styles.cardDiv} id={props.id == actived ? styles.activedCard : ''} onClick={cardActive} data-id={props.id}>
        <div className={styles.cardContent} {... props.color ? {style:{backgroundColor:props.color}} : ''}>
          {props.content}
        </div>
        <div className={styles.cardMenu} {... props.colordiv ? {style:{backgroundColor:props.colordiv}} : ''}>
          {props.icon()}
          <p>{props.text}</p>
          {props.id == actived ? <AiOutlineDown/> : props.id > actived ? <AiOutlineCaretRight/> : <AiOutlineCaretLeft/>}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.port}>
      <div className={styles.card}>
        {menuList.map((value,i)=>{
          return <Card key={i} id={i} {...value}/>
        })}
      </div>  
    </div>
  )
}
