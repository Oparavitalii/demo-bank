import React from "react";
import { increaseAmount } from "../../store/createSlice";
import { useDispatch } from "react-redux";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./index.css";

export default function AddMoney() {
    const dispatch = useDispatch()
    const amountForAdd:number[] = [15,50,1000];
  return (
    <div className="amount">
            {
                amountForAdd.map((amount) => {
                    return (
                        <div className="amount__value" onClick={() => dispatch(increaseAmount(amount))}>
                        <FaMoneyBillAlt />
                        <span>{amount}</span>
                      </div>
                    )
                })
            }
    </div>
  );
}
