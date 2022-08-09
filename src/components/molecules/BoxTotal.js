import React from 'react'

export const BoxTotal = ({ title, result}) => {
    if(result === 'NaN')result = '0.00'

    return (
        <div className='box-total'>
            <div className='box-text'>
                <h6>{title}</h6>
                <small>/ person</small>
            </div>
            <h1>${result}</h1>
        </div>
    )
}