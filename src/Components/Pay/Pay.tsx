import React, { useState, useRef } from "react";
import "./index.css";

import { useDispatch, useSelector } from "react-redux";
import { addUser,saveMoney } from "../../store/createSlice";
import {
  testNumbers,
  testLetters,
  checkInput,
  checkAmount,
  testDefault,
} from "./ValidationPay";

export default function Pay() {
  type IUser = {
    name?: string;
    card?: string;
    amount?: number;
  };
  const amount = useSelector((state: any) => state.amount);
  const dispatch = useDispatch();
  const ref = useRef<any>();
  const [error, setError] = useState({ errorValid: false, errorAmount: false });
  const [user, setUser] = useState<IUser>({});

  function handlerChange(
    e: React.ChangeEvent<any>,
    testType: RegExp,
    amountSymbols: number
  ) {
    if (testType === testDefault) {
      checkAmount(e, amountSymbols);
    } else {
      checkInput(e, testType, amountSymbols);
    }

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onSaveMoney():number {
    let savedMoney;
    if (!user.amount || user.amount > 11) {
      savedMoney = 10-(user.amount as number) % 10;
       
    } else {
      savedMoney = 0;
    }
    return savedMoney;
  }
  function handleFormSubmit(e: React.SyntheticEvent<any>) {
    e.preventDefault();
    let length = Object.getOwnPropertyNames(user).length;

    if (
      length !== 3 ||
      Object.values(user).some(
        (item) => item === "" || user?.card?.trim().length !== 19
      )
    ) {
      setError({ errorAmount: false, errorValid: true });
    } else if (+(amount as number) < +(user.amount as number)) {
      setError({ errorValid: false, errorAmount: true });
    } else {
      setError({ errorValid: false, errorAmount: false });
      dispatch(saveMoney(onSaveMoney()));
      dispatch(addUser(user));
      setUser({});
      ref.current.reset();
    }
  }
 
  return (
    <form
      ref={(e) => (ref.current = e)}
      onSubmit={(e) => handleFormSubmit(e)}
      className="pay"
    >
      <input
        onChange={(e) => handlerChange(e, testLetters, 25)}
        type="text"
        name="name"
        className="pay__name"
        placeholder="Name and surname"
        autoComplete="off"
      />
      <input
        onChange={(e) => handlerChange(e, testNumbers, 16)}
        type="string"
        name="card"
        className="pay__card"
        placeholder="1234 1234 1234 1234"
        autoComplete="off"
      />
      <input
        onChange={(e) => handlerChange(e, testDefault, 1000000)}
        type="number"
        min="0"
        max="1000000"
        name="amount"
        className="pay__amount"
        placeholder="$100"
      />
      <button type="submit">Send</button>
      {error.errorValid && (
        <div className="pay__error">Fill all fields correctly</div>
      )}
      {error.errorAmount && (
        <div className="pay__error">You don't have enough money </div>
      )}
    </form>
  );
}
