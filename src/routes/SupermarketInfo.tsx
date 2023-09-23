import { useParams } from "react-router-dom";
import carrefourData from "../data/carrefour.json";
import gadisData from "../data/gadis.json";
import { Items, Supermarkets } from "../utils/types";
import { ItemList } from "../components/ItemList/ItemList";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import '../styles/supermarketInfo.css'


const SupermarketInfo = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [result, setResult] = useState<Items[]>([])
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

  const searchHandler = (ev: any) => {
    if (ev.target.value === "") setIsSearching(false)
    else {
    const currentValue: string = (ev.target.value).toLowerCase()
    const filteredItems:Items[] = data.filter(item => (item.name.toLowerCase()).includes(currentValue))
    if(filteredItems) setResult(filteredItems)
    setIsSearching(true)}
  }

  return (
    <section className="supermarket-container">
      <button className="back-button" onClick={ () => navigate("/")}>Back</button>
      <h2>{superMarketName}</h2>
      <input type="text"  className="searcher" onChange={(ev) => searchHandler(ev) }/>
      {!isSearching && <div className="items-list">
          {data.map((item) => (<ItemList item={item} />))}
        </div>}
      {isSearching && <div className="items-list">
          {result.map((item) => (<ItemList item={item} />))}
        </div>}
    </section>
  );
};

export default SupermarketInfo;
