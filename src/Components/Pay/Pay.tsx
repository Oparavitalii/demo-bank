import React, { useState , useRef} from "react";
import "./index.css";

import { useDispatch } from "react-redux";
import { addUser } from "../../store/createSlice";
import {
  testNumbers,
  testLetters,
  checkInput,
  checkAmount,
  testDefault,
} from "./ValidationPay";

export default function Pay() {
  const dispatch = useDispatch();
  const [error,setError] = useState(false);
  const [user, setUser] = useState({});

  function handlerChange( e: React.ChangeEvent<any>,  testType: RegExp, amountSymbols: number ) {
    if (testType === testDefault) {
      checkAmount(e, amountSymbols);
    } else {
      checkInput(e,testType,amountSymbols);
    }

    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const ref = useRef<any>();
  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(addUser(user))
    let length = Object.getOwnPropertyNames(user).length;
    if (length !== 3 || Object.values(user).some(item => item === "")) {
      setError(true) 
    } 
    setError(false)
    
    setUser({})
    ref.current.reset();

     }
console.log(user)
  return (
    <form ref={(e) => ref.current = e} onSubmit={(e) => handleFormSubmit(e)} className="pay">
      <input
        onChange={(e) => handlerChange(e, testLetters,25)}
        type="text"
        name="name"
        className="pay__name"
        placeholder="Name and surname"
      />
      <input
        onChange={(e) => handlerChange(e, testNumbers,16)}
        type="text"
        name="card"
        className="pay__card"
        placeholder="1234 1234 1234 1234"
      />
      <input
        onChange={(e) => handlerChange(e,testDefault,1000000)}
        type="number"
        min="1"
        max="1000000"
        name="amount"
        className="pay__amount"
        placeholder="$100"
      />
      <button type="submit">Send</button>
      {error && <div className="pay__error">Fill all fields</div>}
    </form>
  );
}
