import React from 'react'
import BankCart from '../BankCard.tsx/BankCard'
import Options from '../Options/Options'

import "./index.css";

export default function App() {
  return (
    <div className='app'>
      <div className="container">
        <div className="app__inner">
        <BankCart />
        <Options />
        </div>
        </div>
    </div>
  )
}
