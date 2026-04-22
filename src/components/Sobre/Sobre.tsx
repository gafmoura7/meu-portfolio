import styles from './Sobre.module.css'
import { FaCode, FaServer } from 'react-icons/fa'

function Sobre() {
  return (
    <div id="sobre" className={styles.container}>
      <h2 className={styles.titulo}>Sobre Mim</h2>
      <div className={styles.conteudo}>
        <img src="/jo.jpg" alt="Gabriel Moura" className={styles.foto} />
        <div className={styles.texto}>
          <p className={styles.descricao}>
            Sou estudante de Desenvolvimento de Software 
            Multiplataforma na Fatec com foco em ser fullstack. Apaixonado por tecnologia e por criar 
            soluções que unem código e boa experiência para o usuário.
          </p>
          <div className={styles.habilidades}>
            <div className={styles.card}>
              <h3 className={styles.categoriatitulo}>
                <FaCode color="#1e1ea8" /> Frontend
              </h3>
              <ul className={styles.lista}>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Express</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.categoriatitulo}>
                <FaServer color="#1e1ea8" /> Backend
              </h3>
              <ul className={styles.lista}>
                <li>Typescript</li>
                <li>Java</li>
                <li>Python</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre