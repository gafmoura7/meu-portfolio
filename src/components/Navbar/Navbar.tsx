import styles from './Navbar.module.css'

function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      window.location.hash = id
    }, 800)
  }

  return (
    <nav className={styles.nav}>
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }} className={styles.logo}>Gabriel Moura</a>      
        <div className={styles.links}>
        <button onClick={() => scrollTo('sobre')} className={styles.link}>Sobre</button>
        <button onClick={() => scrollTo('projetos')} className={styles.link}>Projetos</button>
        <button onClick={() => scrollTo('trajetoria')} className={styles.link}>Trajetória</button>
        <button onClick={() => scrollTo('contato')} className={styles.link}>Contato</button>
      </div>
    </nav>
  )
}

export default Navbar