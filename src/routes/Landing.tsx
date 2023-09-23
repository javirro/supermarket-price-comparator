import carrefourImg from '../images/carrefour.png'
import gadisImg from '../images/gadis.png'
import alcampoImg from '../images/alcampo.png'
import mercadonaImg from '../images/mercadona.png'
import { useNavigate } from 'react-router-dom'
import { Supermarkets } from '../utils/types'
import '../styles/landing.css'

const Landing = () => {
  const supermarketList: Supermarkets[] = [
    Supermarkets.gadis,
    Supermarkets.carrefour,
    Supermarkets.alcampo,
    Supermarkets.mercadona,
  ]
  const navigate = useNavigate()
  const chooseImage = (name: string) => {
    if (name === Supermarkets.gadis) return gadisImg
    else if (name === Supermarkets.carrefour) return carrefourImg
    else if (name === Supermarkets.alcampo) return alcampoImg
    else if (name === Supermarkets.mercadona) return mercadonaImg
  }

  const supermarketSelectHandler = (name: string) => {
    navigate(`/supermarket-info/${name.toLowerCase()}`)
  }
  return (
    <section className="landing-section">
      <h1 className="landing-title"> Supermarket price comparator</h1>
      <section className="supermarkets-container">
        {supermarketList.map((supermarket) => (
          <article
            key={supermarket}
            className="supermarket-card"
            onClick={() => supermarketSelectHandler(supermarket)}
          >
            <h4 className="supermarket-title">{supermarket}</h4>
            <img
              src={chooseImage(supermarket)}
              alt="supermarket-logo"
              className="landing-imgs"
            />
          </article>
        ))}
      </section>
    </section>
  )
}

export default Landing
