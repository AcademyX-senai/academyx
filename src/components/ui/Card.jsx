import './Card.css'

function Card({ title, children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      {title && <h2 className="card__titulo">{title}</h2>}
      {children}
    </section>
  )
}

export default Card
