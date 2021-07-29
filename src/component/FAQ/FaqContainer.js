import React from 'react'
import SingleAccordion from '../common/SingleAccordion'

const FaqContainer = () => {
    return (
       <div className='container'>
        <div className='FaqContainer'>
           <div className='FaqContainer__box FaqContainer__box1' >
               <h3 className='FaqContainer__heading'>
               SHOPING INFORMATION
               </h3>
                 <SingleAccordion title="Delivery charges for orders from the Online Shop?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="How long will delivery take?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="What exatly happens after ordering?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="Do I receive an invoice for my order?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="What is whish list ?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
           </div>
           <div className='FaqContainer__box FaqContainer__box2'>
                <h3 className='FaqContainer__heading'>
                PAYMENT INFORMATION
               </h3>
             <SingleAccordion title="When the order payment is taken ofc my bank account?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="What is whish list ?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="What should I do if I receive a damaged o wrong product?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="Can I change or cansel my order?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="What is “package tracking” in my order?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
           </div>
        </div>
       </div>
    )
}

export default FaqContainer
