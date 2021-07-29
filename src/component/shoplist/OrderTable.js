import React from 'react';
import image1 from '../../assets/image/shopping card/71-BLZxVrXL 1.png';
import image2 from '../../assets/image/shopping card/—Pngtree—golden event countdown balloon number_5737048 1.png';
import removeIcon from '../../assets/image/shopping card/delete.svg'
import NumButton from '../common/NumButton';
const productList =[
    {
          id:1,
          image:image1 ,
          title:'Roses in a Box (Black Box, Medium)',
          price:'23.00',
          qty:'1',
          Subtotal:'23.00'
    },
    {
        id:2,
        image:image2 ,
        title:'Naumber Balloon',
        price:'23.00',
        qty:'2',
        Subtotal:'23.00'
  }
]
const OrderTable = () => {
    return (
        <div className='OrderTable'>
             <div className='OrderTable__header'>
                <div>
                  Product
                </div>
                <div>
                  Price
                </div>
                <div>
                  Qty
                </div>
                <div>
                  Subtotal
                </div>
              </div>
              <div className='OrderTable__body'>
                 {productList.map(
                     i=>
                     <div className='OrderTable__body--box'>
                        <div className='OrderTable__body--name'>
                            <img src={i.image} />
                            <p>{i.title}</p>
                        </div>
                        <p className='OrderTable__body--price'>AED <span>{i.price}</span></p>
                       <NumButton />
                           <p className='OrderTable__body--price'>AED <span>{i.price}</span></p>
                           <div className='d-flex OrderTable__body--delete'>
                               <img src={removeIcon} />
                           </div>

                     </div>

                 )
                 }
              </div>
        </div>
    )
}

export default OrderTable
