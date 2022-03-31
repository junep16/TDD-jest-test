import React, {useState, useEffect} from 'react'; 
import axios from "axios"; 
import Products from "../OrderPage/Products"; 
import ErrorBanner from '../../components/ErrorBanner';

export default function Type({orderType}) {
    const [items, setItems] = useState([]); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        loadItems(orderType)
    }, [orderType]); 

    const loadItems = async(orderType) => {
        try {
            let response = await axios.get(`http://localhost:4000/${orderType}`); 
            setItems(response.data); 
        } catch(error) {
          setError(true)
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
  
    if(error) {
      return <ErrorBanner message="에러가 발생했습니다">

      </ErrorBanner>
    }
  return (
    <div>{optionItems}</div>
  )
}
