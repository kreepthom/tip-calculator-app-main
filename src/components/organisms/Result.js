import React, { useContext } from 'react'
import { UseContext } from '../../hooks/UseContext'
import './result.css'
import { BoxTotal } from '../molecules/BoxTotal'

export const Result = () => {

  const {data,setData,initialState} = useContext(UseContext)
  const { rtTotal, rtAmount } = data
  return (
    <div className='containerResult'>
      <div>
        <BoxTotal
          title='tip amount'
          result={rtAmount}
        />
        <BoxTotal
          title='Total'
          result={rtTotal}
        />
      </div>

      <button onClick={() => setData(initialState)}>Reset</button>
    </div>
  )
}
