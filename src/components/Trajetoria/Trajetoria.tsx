import styles from './Trajetoria.module.css'

const itens = [
  {
    ano: '2026',
    titulo: 'Desenvolvimento de Software Multiplataforma',
    local: 'Fatec Jacareí',
    descricao: 'Transferência para universidade pública com foco em desenvolvimento web, mobile e boas práticas de engenharia de software.',
  },
  {
    ano: '2024',
    titulo: 'Análise e Desenvolvimento de Sistemas',
    local: 'Anhembi Morumbi',
    descricao: 'Início da jornada na área de tecnologia, onde descobri a paixão pelo desenvolvimento de software.',
  },
  {
    ano: '2020',
    titulo: 'Vendedor',
    local: 'Estilo Branco e Preto',
    descricao: 'Atendimento ao cliente, negociação e relacionamento comercial. Habilidades que complementam minha visão de produto e experiência do usuário.',
  },
  {
    ano: '2017',
    titulo: 'Recreador',
    local: 'Hotelaria',
    descricao: 'Recreação em hotéis, desenvolvendo comunicação, trabalho em equipe e adaptabilidade em ambientes dinâmicos.',
  },
  {
    ano: '2015',
    titulo: 'Técnico em Logística',
    local: 'Etec Cônego José Bento',
    descricao: 'Formação técnica com foco em organização, processos e gestão — base para o pensamento estruturado no desenvolvimento.',
  },
]

function Trajetoria() {
  return (
    <div id="trajetoria" className={styles.container}>
      <h2 className={styles.titulo}>Carreira & Trajetória</h2>
      <div className={styles.linha}>
        {itens.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.ano}>{item.ano}</div>
            <div className={styles.bolinha} />
            <div className={styles.card}>
              <h3 className={styles.itemTitulo}>{item.titulo}</h3>
              <p className={styles.local}>{item.local}</p>
              <p className={styles.descricao}>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trajetoria