import leftArrow from '../icons/leftArrow.svg'
import rightArrow from '../icons/rightArrow.svg'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { PersonalData } from '../context/PersonalContext'




export default function ProgressControl({ step, setStep }) {
  const { total } = useContext(CartContext)
  function checkClick() {
    console.log(PersonalData)
    alert(`已收到訂單，共${total}元，姓名：${PersonalData.Name}，卡號：${PersonalData.CardNumber}，卡片到期日：${PersonalData.Date}，CVC/CCV：${PersonalData.Cvc}`)
  }

  function nextClick() {
    setStep(step + 1)
  }

  function prevClick() {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  function AddressStep() {
    return (
      <section className="button-group col col-12" data-step='1'>
        <button className="next cursor-point" onClick={nextClick}>
          下一步
          <img className="cursor-point" src={rightArrow} alt='RIGHTARROW' />
        </button>
      </section>
    )
  }

  function ShippingStep() {
    return (
      <section className="button-group col col-12" data-step='2'>
        <button className="prev cursor-point" onClick={prevClick}>
          <img className="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next cursor-point" onClick={nextClick}>
          下一步
          <img className="cursor-point" src={rightArrow} alt='RIGHTARROW' />
        </button>
      </section>
    )
  }

  function CreditCardStep() {
    return (
      <section className="button-group col col-12" data-step='3'>
        <button className="prev cursor-point" onClick={prevClick}>
          <img className="cursor-point" src={leftArrow} alt='LEFTARROW' />
          上一步
        </button>
        <button className="next" onClick={checkClick}>確認下單</button>
      </section>
    )
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {step === 1 && <AddressStep />}
      {step === 2 && <ShippingStep />}
      {step === 3 && <CreditCardStep />}
    </section>
  )
}