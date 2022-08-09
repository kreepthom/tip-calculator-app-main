import React from 'react'

export const Inputs = ({ forhtml = 'hi', title, value, children, handleInputChange, name}) => {

    

    return (
        <div className='container-input'>
            <label className='input-label' htmlFor={forhtml}>{title}</label>
            <div className="input-wrapper">
                <input
                    name={name}
                    type="number"
                    className='input'
                    id={forhtml}
                    value={value}
                    onChange={handleInputChange}
                />
                {
                    children
                }
            </div>
        </div>
    )
}