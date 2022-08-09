import React,{useContext} from 'react'
import {UseContext} from '../../hooks/UseContext'
import { IconPerson, IconDollar } from '../molecules/Svgs';
import {Inputs} from '../molecules/Inputs'
import { ContainerTip } from '../atoms/ContainerTip';
import './calculater.css'

export const Calculater = () => {

    const {data,setData} = useContext(UseContext)
    const {vBill,vPeople,vCustom} = data
    
    const handleInputChange = ({target}) => {
        
        setData({
            ...data,
            [target.name]: target.value,
        })
    }
    return (
        <div className="container-calculater">
            <Inputs 
                forhtml='bill' 
                title='Bill' 
                value={vBill}
                name='vBill' 
                children={<IconDollar/>}
                handleInputChange={handleInputChange}
            />
            <ContainerTip 
                handleInputChange={handleInputChange} 
                value={vCustom} 
                name='vCustom' 
                />
            <Inputs 
                isRequired={true}
                forhtml='Npeople' 
                title='Number of People' 
                value={vPeople}
                name='vPeople' 
                children={<IconPerson/>}
                handleInputChange={handleInputChange}
            />

        </div>
    )
}
