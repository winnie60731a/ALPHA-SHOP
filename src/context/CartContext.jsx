import { createContext, useState } from "react";

export const datas = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 0,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 0,
  },
]

export const CartContext = createContext(0)

//設一個傳遞資料用的父層
export function CartContextProvider({ children }) {
  const [cartDatas, setCartDatas] = useState(datas)
  const total = cartDatas.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);


  return (
    //把state當作value傳入
    <CartContext.Provider value={{ cartDatas, setCartDatas, total }}>
      {children}
    </CartContext.Provider>
  )
}