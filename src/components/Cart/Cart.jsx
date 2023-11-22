import { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import minus from '../../icons/minus.svg'
import plus from '../../icons/plus.svg'


export default function Cart() {
  //接住在父層設的CartContext參數
  //獲取購物車數據(購物車資料, 更新購物車資料, 購物車總額)
  const { cartDatas, setCartDatas, total } = useContext(CartContext)
  
  //用傳來的參數操作資料
  function handleMinus (itemId) {
    setCartDatas(cartDatas.map(data => {
      if (data.id === itemId && data.quantity > 0) {
        return {
          ...data, quantity: data.quantity - 1
        }
      } else {
        return data
      }
    }))
  }

 function handlePlus(itemId) {
    setCartDatas(cartDatas.map(data => {
      if (data.id === itemId) {
        return {
          ...data, quantity: data.quantity + 1
        }
      } else {
        return data
      }
    }))
  }

return (
  //顯示購物車內容及提供增加及減少商品數量操作
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      {cartDatas.map((item) => (
        <section className="product-list col col-12" key={item.id} data-total-price={0}>
          <div className="product-container col col-12" data-count={0} data-price={3999}>
            <img className="img-container" src={item.img} />
            <div className="product-info">
              <div className="product-name">{item.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img className="product-action minus" src={minus} alt='MINUS' onClick={() => handleMinus(item.id)} />
                  <span className="product-count">{item.quantity}</span>
                  <img className="product-action plus" src={plus} alt='PLUS' onClick={() => handlePlus(item.id)} />
                </div>
              </div>
              <div className="price">${item.price * item.quantity}</div>
            </div>
          </div>
        </section>
      ))}
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${total}</div>
      </section>
    </section>
  )
}

