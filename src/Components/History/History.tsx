import React,{useState} from "react";

import { useSelector } from "react-redux";

import "./index.css"

export default function History() {
  type IShowAll = {
    isShow: boolean,
    textButton : string[]

  }
  let user = useSelector((state: any) => state.users);
  const [showAll,setShowAll] = useState<IShowAll>({
    isShow : false,
    textButton: ["show all","show latest"]
  })
  const coutOfElements = showAll.isShow ? null : -3;

  return (
    <section className="history">
      <div className="history__top">
        <h2 className="histoy__header">Reacent transaction</h2>
        <button className="history__btn" onClick={() => setShowAll({...showAll,isShow: !showAll.isShow })}>{showAll.isShow ? showAll.textButton[1] : showAll.textButton[0]}</button>
      </div>

      {user.slice(coutOfElements).reverse().map((item: any) => {
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
