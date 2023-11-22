import StepOne from './step/Step1'
import StepTwo from './step/Step2'
import StepThree from './step/Step3'
import pgComplete from '../icons/pgComplete.svg'


export default function StepProgress({ step }) {

  return (
    <section className="register-container col col-lg-6 col-sm-12" data-phase={1} data-total-price={0}
    >
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        {/* step1 */}
        {step === 1 && <StepTitleOne />}
        {/* step2 */}
        {step === 2 && <StepTitleTwo />}
        {/* step3 */}
        {step === 3 && <StepTitleThree />}
      </section>
      {/* register-form */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </section>
  )
}

export function StepTitleOne() {
  return (
    <>
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <span className="text">1</span>
        </span>
        <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="shipping">
        <span className="progress-icon">
          <span className="text">2</span>
        </span>
        <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order={2} />
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>
    </>
  )
}

export function StepTitleTwo() {
  return (
    <>
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <img src={pgComplete} alt='pg' />
        </span>
        <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <span className="text">2</span>
        </span>
        <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>
    </>
  )
}

export function StepTitleThree() {
  return (
    <>
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <img src={pgComplete} alt='pg' />
        </span>
        <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <img src={pgComplete} alt='pg' />
        </span>
        <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order={1} />
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>
    </>
  )
}

<img src={pgComplete} alt='pg'/>