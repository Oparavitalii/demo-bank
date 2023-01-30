import React from 'react'

import { returnSavedMoney } from '../../store/createSlice';
import { useSelector,useDispatch } from 'react-redux';
import "./index.css";

export default function PiggyMoney() {
  const savedMoney = useSelector((state:any) => state.savedMoney)
  const dispatch = useDispatch();

  return (
    <div className="piggy">
    <div className='piggy__money'>You save <span>{savedMoney}</span> $</div>
    <button className='piggy__return' onClick={() => dispatch(returnSavedMoney())}>Return money to the card</button>
    </div>
  )
}
