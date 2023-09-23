import carrefourImg from '../images/carrefour.png'
import gadisImg from '../images/gadis.png'
import alcampoImg from '../images/alcampo.png'
import '../styles/landing.css'
const Landing = () => {
  const supermarketList = ['Gadis', 'Carrefour', 'Al Campo']

  const chooseImage = (name: string) => {
    if (name === 'Gadis') return gadisImg
    else if (name === 'Carrefour') return carrefourImg
    else if (name === 'Al Campo') return alcampoImg
  }
  return (
    <section>
      <h1> Supermarket price comparator</h1>
      <section className='supermarkets-container'>
        {supermarketList.map((supermarket) => (
          <article key={supermarket} className="supermarket-card">
            <h4 className="supermarket-title">{supermarket}</h4>
            <img src={chooseImage(supermarket)} alt="supermarket-logo"  className="landing-imgs"/>
          </article>
        ))}
      </section>
    </section>
  )
}

export default Landing
