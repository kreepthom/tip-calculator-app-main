import React, { useState,useEffect } from 'react'
import { Calculater } from './components/organisms/Calculater'
import { Result } from './components/organisms/Result'
import { UseContext } from './hooks/UseContext'
import {calculator} from './helpers/calculator'

function App() {

  const initialState = {
    vBill: '',
    vPeople: '',
    vCustom: '',
    discount:'',
    rtTotal: 0.00,
    rtAmount: 0.00,
  } 
  const [data, setData] = useState(initialState)

  const {vBill, vPeople, discount, vCustom} = data

    useEffect(() => {
      const {rtAmount,rtTotal} = calculator(vBill, vPeople, discount, vCustom)
      setData({
        ...data,
        rtAmount,
        rtTotal,
      })
    },[vPeople])

  const valuesUseContext = {
    initialState,
    data,
    setData,
  }

  return (

    <UseContext.Provider value={valuesUseContext}>

      <div className="App">
        <img className='img-title' src="images/logo.svg" alt="Splitter" />
        <div className="container-main">
          <Calculater />
          <Result />
        </div>
      </div>
    </UseContext.Provider>
  );
}

export default App;
