import { Items } from '../../utils/types'
import './itemList.css'

export const ItemList = ({ item }: { item: Items }) => {
  return (
    <div className="item-container">
      <span>{item.name}</span>
      <span>{item.price} €</span>
      <span>{item.brand}</span>
    </div>
  )
}
