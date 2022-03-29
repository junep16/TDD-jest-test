import React, {useState, useEffect} from 'react'; 
import axios from "axios"; 
import Products from "../OrderPage/Products"; 

export default function Type({orderType}) {
    const [items, setItems] = useState([]); 

    useEffect(() => {
        loadItems(orderType)
    }, [orderType]); 

    const loadItems = async(orderType) => {
        try {
            let response = await axios.get(`http://localhost:4000/${orderType}`); 
            setItems(response.data); 
        } catch(error) {

        }
    }
    const ItemComponent = orderType === "products" ? Products : null; 
    const optionItems = items.map((item) => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath} 
      />
    ));
    
  return (
    <div>(optionItems)</div>
  )
}
