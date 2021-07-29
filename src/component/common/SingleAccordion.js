import React,{useState} from 'react'
import arrowUp from '../../assets/image/faq/arrow-up.svg'
import arrowdown from '../../assets/image/faq/arrow-down.png'

const SingleAccordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        
        <div
          className={` accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          <p>{title}</p>
        {
            !isOpen ?
            <img src={arrowdown} />
            :
            <img src={arrowUp} />

        }
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
export default SingleAccordion
