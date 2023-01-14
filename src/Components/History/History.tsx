import React from "react";

import { useSelector } from "react-redux";

import "./index.css"

export default function History() {
  const user = useSelector((state: any) => state.users);
  return (
    <section className="history">
      <div className="history__top">
        <h2 className="history__header">Reacent transaction</h2>
        <button className="history__btn">see all</button>
      </div>

      {user.map((item: any) => {
        return (
          <div className="history__details">
            <div className="history__data">
              <div className="history__name">{item.name}</div>
              <div className="history__card">{item.card}</div>
            </div>
            <div className="history__amount">{item.amount} $</div>
            
          </div>
        );
      })}
    </section>
  );
}
