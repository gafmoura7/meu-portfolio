import styles from './Projetos.module.css'
import { FaGithub } from 'react-icons/fa'

const projetos = [
  {
    id: 1,
    nome: 'Clima App',
    descricao: 'App de previsão do tempo com busca por cidade, temperatura, umidade e velocidade do vento.',
    imagem: '/clima-app.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Docker'],
    link: 'https://github.com/gafmoura7/clima-app'
  },
  {
    id: 2,
    nome: 'NexaTech',
    descricao: 'Aplicação web de autoatendimento da Secretaria Acadêmica da Fatec Jacareí. Chatbot conversacional com navegação por menus hierárquicos, autenticação JWT e repositório de documentos oficiais.',
    imagem: '/NexaTech.jpeg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'JWT'],
    link: 'https://github.com/NexaTechJAC'
  },
  {
    id: 3,
    nome: 'Estruturas Lineares',
    descricao: 'Aplicação web que consome uma API REST de estruturas lineares (Pilha, Fila e Lista) com conceitos de POO.',
    imagem: '/pilha.png',
    tags: ['TypeScript', 'React', 'API REST', 'POO'],
    link: 'https://github.com/gafmoura7/pilha'
  },
]

function Projetos() {
  return (
    <div id="projetos" className={styles.container}>
      <h2 className={styles.titulo}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className={styles.card}>
            <img src={projeto.imagem} alt={projeto.nome} className={styles.imagem} />
            <div className={styles.info}>
              <h3 className={styles.nomeProjeto}>{projeto.nome}</h3>
              <p className={styles.descricao}>{projeto.descricao}</p>
              <div className={styles.tags}>
                {projeto.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={projeto.link} target="_blank" rel="noreferrer" className={styles.link}>
                <FaGithub size={16} /> Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos