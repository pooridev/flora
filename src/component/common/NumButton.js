import React,{useState} from 'react'

const NumButton = () => {
    const [num, setnum] = useState(1)
    const increase = ()=>{
        setnum(num + 1) 
    }
    const decrease = ()=>{
        if(num >= 1){
            setnum(num - 1) 

        }

    }
    return (
        <div className='ProductdetailInfo__countBox'>
              <button onClick={decrease} type='button' className='btn  ProductdetailInfo_countbtn-negative'>
                  -
              </button>
              <div className='ProductdetailInfo_countnum center'>
                 {num}
              </div>
              <button onClick={increase} type='button' className='btn ProductdetailInfo_countbtn-positive'>
                  +
              </button>
         </div>
    )
}

export default NumButton
