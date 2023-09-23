import { Items } from '../../utils/types'
import './itemList.css'

export const ItemList = ({ item }: { item: Items }) => {
  return (
    <div className="item-container">
      <span className="item-name">{item?.name}</span>
      <span className="item-name">{item?.price} €</span>
    </div>
  )
}
