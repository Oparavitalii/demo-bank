import React from "react";
import "./index.css";
import {
  BsWalletFill,
  BsFillArrowUpCircleFill,
  BsPiggyBank,
  BsThreeDots,
} from "react-icons/bs";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pay from "../Pay/Pay";
import PiggyMoney from "../PiggyMoney/PiggyMoney";
import History from "../History/History";
import AddMoney from "../AddMoney/AddMoney";

export default function Options() {
  return (
    <Router>
      <div className="options">
        <div className="options__inner">
          <Link to="bankapp/addmoney">
            <div className="options__replenish">
              <BsWalletFill className="options__replenish-img" />
              <span className="options__text">Replenish</span>
            </div>
          </Link>
          <Link to="bankapp/pay">
            <div className="options__pay">
              <BsFillArrowUpCircleFill className="options__pay-img" />
              <span className="options__text">Pay</span>
            </div>
          </Link>
          <Link to="bankapp/piggymoney">
            <div className="options__piggy">
              <BsPiggyBank className="options__piggy-img" />
              <span className="options__text">PiggyMoney</span>
            </div>
          </Link>
          <Link to="bankapp/history">
            <div className="options__history">
              <BsThreeDots className="options__history-img" />
              <span className="options__text">History</span>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="bankapp/pay" element={<Pay />} />
          <Route path="bankapp/piggymoney" element={<PiggyMoney />} />
          <Route path="bankapp/history" element={<History />} />
          <Route path="bankapp/addmoney" element={<AddMoney />} />
          
        </Routes>
      </div>
    </Router>
  );
}
