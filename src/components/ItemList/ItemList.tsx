import { Items } from '../../utils/types'
import './itemList.css'

export const ItemList = ({ item }: {item: Items}) => {
  return(
    <div>
      {item.name}
    </div>
  )
}