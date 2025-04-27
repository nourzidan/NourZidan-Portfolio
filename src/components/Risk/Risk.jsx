import "./Risk.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Risk() {
  const { mode, setmood } = useContext(ThemeContext);
  return (
    <section className={`risk-section ${mode}`}>
      {/* <img className='risk-img' src="/assets/Bottom.svg" alt="" /> */}
      <div className="contant-div">
        <img className="squaer-img" src="/assets/Images bg.svg" alt="" />
        <img className="squaer-img-d" src="/assets/Images bg.svg" alt="" />
        <div className="text-div">
          <div className={`t-div `}>
            <h1>Try me out, risk free!</h1>
            <h3>
              If you’re not happy with the design after the first draft, I’ll
              refund your deposit, no questions asked
            </h3>
          </div>
          <div className="btn-div">
            <a className="btn-risk">Contact <img className="btn-img" src="/assets/download.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
