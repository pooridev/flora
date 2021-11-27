import React, {useEffect, useState} from 'react'
import { haveTokens } from './../../helpers/auth';

const NumButton = ({onChange, initialCount, disabled, max}) => {
    const [num, setnum] = useState(initialCount || 1)
    const increase = () => {
        setnum(prevNum => {
            if (haveTokens()) {
                onChange(prevNum >= max ? prevNum : prevNum + 1)
                return prevNum >= max ? prevNum : prevNum + 1
            } else {
                onChange(prevNum + 1)
                return prevNum + 1
             }
        })
    }
    const decrease = () => {
        if (num > 1) {
            setnum(prevNum => {
                 onChange(prevNum - 1)
                 return prevNum - 1
            })

        }

    }

    // useEffect(() => {
    // 	typeof onChange === 'function' && onChange(num);
	// }, [num])

    return (
        <div className='ProductdetailInfo__countBox'>
            <button disabled={!!disabled} onClick={decrease} type='button' className='btn  ProductdetailInfo_countbtn-negative'>
                -
            </button>
            <div className='ProductdetailInfo_countnum center'>
                {num}
            </div>
            <button disabled={!!disabled} onClick={increase} type='button' className='btn ProductdetailInfo_countbtn-positive'>
                +
            </button>
        </div>
    )
}

export default NumButton
