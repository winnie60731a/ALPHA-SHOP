import { useState } from "react";
import StepProgress from "./components/StepProgress";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext.jsx";

import logo from "./icons/logo.svg"
import search from "./icons/search.svg"
import cart from "./icons/cart.svg"
import moon from "./icons/moon.svg"
import sun from "./icons/sun.svg"
import facebook from "./icons/facebook.svg"
import instagram from "./icons/instagram.svg"
import whatsapp from "./icons//whatsapp.svg"

function App() {

  const [step, setStep] = useState(1)

  return (
    <>
    {/* 把要傳遞的範圍用 CartContextProvider 包起來*/}
      <CartContextProvider>
        {/* header */}
        <header className="site-header">
          <div className="header-container mx-auto">
            {/* navbar-toggle */}
            <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
            <label htmlFor="navbar-toggle" className="burger-container">
              {/* <object
              data="./public/icons/toggle.svg"
              className="icon-toggle cursor-point"
            /> */}
            </label>
            {/* navbar-menu */}
            <nav className="navbar-menu">
              <ul className="nav-list site-menu-list mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    男款
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    女款
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    最新消息
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    客製商品
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    聯絡我們
                  </a>
                </li>
              </ul>
              <ul className="nav-list site-action-list">
                {/* search */}
                <li className="nav-item">
                  <img src={search} className="nav-icon cursor-point" />
                </li>
                {/* cart */}
                <li className="nav-item">
                  <img src={cart} className="nav-icon cursor-point" />
                </li>
                <li id="theme-toggle" className="nav-item">
                  {/* moon */}
                  <img src={moon} className="nav-icon cursor-point" />
                  {/* sun */}
                  <img src={sun} className="nav-icon cursor-point" />
                </li>
              </ul>
            </nav>
            {/* logo */}
            <a className="header-logo-container" href="#">
              <img src={logo} className="cursor-point" />
            </a>
          </div>
        </header>
        {/* main */}
        <main className="site-main">
          <div className="main-container">
            {/* register **/}
            {/* 結帳 */}
            <StepProgress step={step} />
            {/* cart */}
            <Cart />
            {/* progress-control */}
            <ProgressControl step={step} setStep={setStep} />
          </div>
        </main>
        {/* footer */}
        <footer className="site-footer">
          <div className="footer-container">
            <section className="footer-section">
              <div className="footer-logo-container">
                <img src={logo} className="cursor-point" />
              </div>
            </section>
            <section className="footer-section">
              <h2 className="section-title">客戶服務</h2>
              <div className="section-content">
                <a className="page-link" href="#">
                  運送說明
                </a>
                <a className="page-link" href="#">
                  退換貨相關
                </a>
                <a className="page-link" href="#">
                  付款資訊
                </a>
                <a className="page-link" href="#">
                  FAQ
                </a>
              </div>
            </section>
            <section className="footer-section">
              <h2 className="section-title">關於我們</h2>
              <div className="section-content">
                <a className="page-link" href="#">
                  品牌故事
                </a>
                <a className="page-link" href="#">
                  媒體聯繫
                </a>
                <a className="page-link" href="#">
                  Press kit
                </a>
              </div>
            </section>
            <section className="footer-section">
              <h2 className="section-title">資訊</h2>
              <div className="section-content">
                <a className="page-link" href="#">
                  隱私權政策
                </a>
                <a className="page-link" href="#">
                  Cookie
                </a>
                <a className="page-link" href="#">
                  GDPR
                </a>
              </div>
            </section>
            <section className="footer-section">
              <h2 className="section-title">追蹤 ALPHA Shop</h2>
              <div className="section-content">
                <div className="tel-info">+886 02123-45678</div>
                <div className="social-icon-group">
                  <img src={facebook} className="social-icon cursor-point" />
                  <img src={instagram} className="social-icon cursor-point" />
                  <img src={whatsapp} className="social-icon cursor-point" />
                </div>
              </div>
            </section>
          </div>
        </footer>
      </CartContextProvider>
    </>
  )
}

export default App;