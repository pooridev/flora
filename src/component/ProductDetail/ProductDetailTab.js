import React,{useState} from 'react'
import ProductDetailReview from './productDetailReview';

const ProductDetailTab = () => {
    const [tab, settab] = useState(1);
    const tablist = [
        {
            tab:'DESCRIPTION',
            id:1
        },
        {
           tab:'ADDITIONAL INFORMATION',
           id:2
       },
       {
           tab:'REVIEWS(0)',
           id:3
       },
    ]
    return (
        <section className='ProductDetailTab-sec'>
            <div className='container'>
                <div className='ProductDetailTab'>
                   <div className='ProductDetailTab__head'>
                      {
                     tablist.map(
                         i=>
                         <div
   
                           onClick={()=>settab(i.id)} className={`FeaturedProduct__tabhead--title 
                            ${i.id === tab ? 'product-active-tabfeature' : null }`
                           }>
                             {i.tab}
                             <div className='product-tabtitlehover'></div>
                          </div>
                     )
                              
                     }
                   </div>
                   <div className='ProductDetailTab__container'>
                      {
                          tab === 1 ?
                          <div className='ProductDetailTab__description'>
                             <h4>
                               MAECENAS IACULIS

                             </h4>
                             <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit hac iaculis dui, vitae. Eu aliquam ultrices bibendum mauris sit. Eget nec massa adipiscing quam est eros, arcu. Bibendum in facilisi pretium ullamcorper.
                               Proin amet faucibus at elementum egestas. Massa ornare turpis lacus lacus, interdum amet egestas. Habitant nascetur lacus, cursus augue vitae, commodo phasellus. 
                               Pharetra et varius ut nullam ut mauris aliquam ut. Phasellus urna, at commodo, enim vel. Mattis neque id egestas pulvinar vitae. Dictum at egestas commodo sed tempus.
                             </p>
                          </div>:
                          tab === 2 ?
                          <div className='ProductDetailTab__description'>
                          AdditionalInfo
                       </div>:<ProductDetailReview />
                      }
                   </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetailTab
