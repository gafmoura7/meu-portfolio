import styles from './Footer.module.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <div>
          <p className={styles.nome}>Gabriel Moura</p>
          <p className={styles.cargo}>Desenvolvedor de Software</p>
        </div>
        <div className={styles.icones}>
          <a href="https://github.com/gafmoura7" target="_blank" rel="noreferrer" className={styles.icone}>
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/gabriel-moura7" target="_blank" rel="noreferrer" className={styles.icone}>
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:gafmoura@gmail.com" className={styles.icone}>
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
      <hr className={styles.linha} />
      <p className={styles.copyright}>© {new Date().getFullYear()} Gabriel Moura. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer