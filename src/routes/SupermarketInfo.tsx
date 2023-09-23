import { useParams } from "react-router-dom";
import carrefourData from "../data/carrefour.json";
import gadisData from "../data/gadis.json";
import { Items, Supermarkets } from "../utils/types";
import { ItemList } from "../components/ItemList/ItemList";
import { useNavigate } from 'react-router-dom'
import '../styles/supermarketInfo.css'

const SupermarketInfo = () => {
  const { supermarket } = useParams();
  const navigate = useNavigate()
  const superMarketName = supermarket
    ? ((supermarket?.charAt(0).toUpperCase() + supermarket?.slice(1)) as Supermarkets)
    : supermarket;

  const chooseData = (name: Supermarkets): Items[] => {
    if (name === Supermarkets.gadis) return gadisData;
    else if (name === Supermarkets.carrefour) return carrefourData;
    else return [];
  };
  const data: Items[] = chooseData(superMarketName as Supermarkets);
  return (
    <section className="supermarket-container">
      <button className="back-button" onClick={ () => navigate("/")}>Back</button>
      <h2>{superMarketName}</h2>
      <div className="items-list">
        {data.map((item) => (<ItemList item={item} />))}
      </div>
    </section>
  );
};

export default SupermarketInfo;
