import React from 'react'
import Type from './Type';

function OrderPage() {
  return (
    <div>
      <h1>여행 상품</h1>
      <div>
        <Type orderType="products"/>
      </div>
      <div style={{display: 'flex', marginTop:20}}>
        <div style={{width: '50%'}}>
          <Type orderType="options"/>
        </div>
      <div style={{ width: '50%'}}>
        <h2>총 금액</h2>
      </div>
      </div>
      <button>주문하기</button>

    </div>
  )
}

export default OrderPage; 
