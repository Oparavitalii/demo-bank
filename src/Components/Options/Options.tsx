import React from "react";
import "./index.css";
import {
  BsWalletFill,
  BsFillArrowUpCircleFill,
  BsPiggyBank,
  BsThreeDots,
} from "react-icons/bs";
import AddMoney from "../AddMoney/AddMoney";
import Error from "../Error/Error";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pay from "../Pay/Pay";
import PiggyMoney from "../PiggyMoney/PiggyMoney";
import History from "../History/History";

export default function Options() {
  return (
    <Router>
    <div className="options">
      <div className="options__inner">
      <Link to="/add"> 
        <div
          className="options__replenish"
        >
          <BsWalletFill className="options__replenish-img" />
          <span className="options__text">Replenish</span>
        </div></Link>
        <Link to="/pay"> 
        <div className="options__pay">
          <BsFillArrowUpCircleFill className="options__pay-img" />
          <span className="options__text">Pay</span>
        </div>
        </Link>
        <Link to="/piggymoney"> 
        <div className="options__piggy">
          <BsPiggyBank className="options__piggy-img" />
          <span className="options__text">PiggyMoney</span>
        </div>
        </Link>
        <Link to="/history"> 
        <div className="options__history">
          <BsThreeDots className="options__history-img" />
          <span className="options__text">History</span>
        </div>
        </Link>
      </div>
    
        <Routes>
          <Route path="/add" element={<AddMoney />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/piggymoney" element={<PiggyMoney />} />
          <Route path="/history" element={<History />} />
        </Routes>
     
    </div>
    </Router>
  );
}
