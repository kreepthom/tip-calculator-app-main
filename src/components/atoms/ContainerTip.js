import React,{useContext} from 'react'
import { UseContext } from '../../hooks/UseContext'
import './containerTip.css'

export const ContainerTip = ({handleInputChange,value,name}) => {

  const {data,setData} = useContext(UseContext) 
  if(value > 100) value = 99
    
  
  const handleDiscount = (Count)=>{
    setData({
      ...data,
      discount:Count,
    })
  }

  const Buttons = ({value}) =>(
    <button onClick={ () => handleDiscount(value)} className='buttom'>{value}%</button>
  )

  return (
    <div className="containerTip">
      <p >Select Tip %</p>
      <div className='tip-buttoms'>
        <Buttons value={5}/>
        <Buttons value={10}/>
        <Buttons value={15}/>
        <Buttons value={25}/>
        <Buttons value={50}/>
        <input 
          className='custom' 
          type="number"
          value={value}
          onChange={handleInputChange}
          name={name} 
          placeholder="custom"
           />
      </div>
    </div>
  )
}
