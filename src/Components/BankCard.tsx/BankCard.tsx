import React from "react";
import "./index.css";
import { useSelector} from "react-redux/es/exports";
export default function BankCart() {

  const amount = useSelector((state:any) => state.amount);
  
  return (
    <section className="card">
        <div className="card__inner">
        
          <div className="card__balance">
            <div className="card__money-text">Total balance:</div>
            <div className="card__money">$ {amount}</div>
          </div>
          <div className="card__data">
            <div className="card__number">2309 6678 3441 2889</div>
            <div className="card__owner">John Lennon Theiry</div>
            <div className="card__bank-name">Bank Blue</div>
          </div>
        </div>
    </section>
  );
}
