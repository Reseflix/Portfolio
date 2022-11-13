import styles from './habilidades.module.scss'
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoSass } from 'react-icons/io'
import { SiTypescript, SiPhpstorm, SiDocker, SiMysql, SiReact, SiReacttable, SiPandas, SiCsswizardry, SiSqlite, SiExpress, SiVite } from 'react-icons/si'
import { DiPhp, DiVisualstudio, DiNodejs } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import React, { useState } from 'react';
import { Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const skills = [
    {icon:IoLogoJavascript,type:'Language',name:'Javascript',desc:'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'},
    {icon:SiTypescript,type:'Language',name:'Typescript',desc:'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'},
    {icon:DiPhp,type:'Language',name:'Php',desc:'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.'},
    {icon:IoLogoHtml5,type:'Language',name:'Html',desc:'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'},
    {icon:IoLogoSass,type:'Language',name:'Sass',desc:'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.'},
    {icon:SiCsswizardry,type:'Language',name:'Css',desc:'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.'},
    {icon:IoLogoPython,type:'Language',name:'Python',desc:'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.'},
    {icon:SiPhpstorm,type:'Tool',name:'PhpStorm',desc:'O PhpStorm é conhecido por seu Depurador visual com configuração zero, proporcionando uma visão extraordinária do que acontece no seu aplicativo em cada etapa. Ele funciona com o Xdebug e o Zend Debugger e pode ser usado tanto local quanto remotamente.'},
    {icon:SiDocker,type:'Tool',name:'Docker',desc:'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.'},
    {icon:SiMysql,type:'Tool',name:'Mysql',desc:'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.'},
    {icon:SiSqlite,type:'Tool',name:'Sqlite',desc:'SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido. Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado.'},
    {icon:DiNodejs,type:'Tool',name:'NodeJs',desc:'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.'},
    {icon:DiVisualstudio,type:'Tool',name:'VsCode',desc:'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.'},
    {icon:SiReact,type:'Framework',name:'React',desc:'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'},
    {icon:SiReacttable,type:'Framework',name:'React Table',desc:'Interface de usuário sem comando para criar tabelas e datagrids poderosos.'},
    {icon:SiPandas,type:'Framework',name:'Pandas',desc:'Em programação de computadores, pandas é uma biblioteca de software criada para a linguagem Python para manipulação e análise de dados. Em particular, oferece estruturas e operações para manipular tabelas numéricas e séries temporais. É software livre sob a licensa licença BSD.'},
    {icon:TbBrandNextjs,type:'Framework',name:'NextJs',desc:'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.'},
    {icon:SiExpress,type:'Framework',name:'ExpressJs',desc:'Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Nodejs.'},
    {icon:SiVite,type:'Framework',name:'ViteJS',desc:'Vite é uma ferramenta para o desenvolvedor(a) frontend, o significado de sua palavra vem do francês, que significa “rápido”.'},
]



export default function Habilidades(){

    function SkillModal(value:any,i:any) {
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        return (
            <span key={i}>
                <span id={'pop_' + i} onClick={toggle}>{value.icon({size:70})}</span>
                <Modal isOpen={modal} toggle={toggle} className={styles.modal}>
                    <ModalHeader toggle={toggle}>{value.name}</ModalHeader>
                    <ModalBody>
                        {value.desc}
                    </ModalBody>
                    <ModalFooter>
                    <Badge color="primary">
                        {value.type}
                    </Badge>
                    </ModalFooter>
                </Modal>
            </span>
        )
    }

    function SkillType(){
        return (
            <div className={styles.skills}>
                {
                    skills.map((value,i)=>{
                        return SkillModal(value,i)
                    })
                }
            </div>
        )
    }

    return (
        <SkillType/>
    )
  }