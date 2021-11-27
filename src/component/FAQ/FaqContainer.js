import React from 'react'
import SingleAccordion from '../common/SingleAccordion'
import Spinner from './../common/Spinner';

const FaqContainer = ({ FAQs, loading }) => {
    return (
        <div className='container'>
            <div className='FaqContainer'>
                {
                 
                    loading &&  <div style={{ margin: 'auto', position: 'relative' }}> <Spinner />  </div>
                  
                }
                {
                    FAQs.map(item => (
                        <div className='FaqContainer__box FaqContainer__box1'>
                            <h3 className='FaqContainer__heading'>
                                {item['title']}
                            </h3>
                            {
                                item['items'].filter(item => !!item.question && !!item.answer).map((item) => (
                                    <SingleAccordion title={item['question']}>
                                        {item['answer']}
                                    </SingleAccordion>
                                ))
                            }
                        </div>
                    ))
                }
           </div>
        </div>
    )
}

export default FaqContainer
