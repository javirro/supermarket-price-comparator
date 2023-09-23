import { useParams } from "react-router-dom";
import carrefourData from "../data/carrefour.json";
import gadisData from "../data/gadis.json";
import { Items, Supermarkets } from "../utils/types";
import { ItemList } from "../components/ItemList/ItemList";
const SupermarketInfo = () => {
  const { supermarket } = useParams();
  const superMarketName = supermarket
    ? ((supermarket?.charAt(0).toUpperCase() +
        supermarket?.slice(1)) as Supermarkets)
    : supermarket;

  const chooseData = (name: Supermarkets): Items[] => {
    if (name === Supermarkets.gadis) return gadisData;
    else if (name === Supermarkets.carrefour) return carrefourData;
    else return [];
  };
  const data: Items[] = chooseData(superMarketName as Supermarkets);
  return (
    <section>
      <h2>{superMarketName}</h2>
      <div>
        {data.map((item) => (
          <ItemList item={item} />
        ))}
      </div>
    </section>
  );
};

export default SupermarketInfo;
