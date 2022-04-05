import { createContext, useState, useMemo, useEffect } from "react";

export const OrderContext = createContext(); 

export function OrderContextProvider(props) {

  const [orderCounts, setOrderCounts] = useState( {
    products: new Map(), 
    options: new Map(), 
  });
  
  const [total, setTotal] = useState({
    products: 0, 
    options: 0, 
    total: 0 
  }); 

  const pricePerItem = {
    products: 1000, 
    options: 500
  }

  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0; 
    for (const count of orderCounts[orderType].values()) {
      optionCount += count; 
    }
    return optionCount * pricePerItem[orderType]
  }

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts); 
    const optionsTotal = calculateSubtotal("options", orderCounts); 
    const total = productsTotal + optionsTotal;
    setTotal({
      products: productsTotal, 
      options: optionsTotal, 
      total: total, 
    }); 
  }, [orderCounts]); 


  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = {...orderCounts}
      const ordercountsMap = orderCounts[orderType]
      ordercountsMap.set(itemName, parseInt(newItemCount)); 
      setOrderCounts(newOrderCounts); 
    }

    return [{...orderCounts, total}, updateItemCount]
  },[orderCounts, total]); 

  return <OrderContext.Provider value={value}  {...props}/> 
}