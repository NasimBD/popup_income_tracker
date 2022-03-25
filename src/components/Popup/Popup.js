import React, { useEffect, useRef } from 'react';
import './style.css';

export const Popup = (props) => { 

  const popupModalInnerRef = useRef();

  useEffect(() => {
    const closeDiv = e => {
      const popupInnerDiv = document.getElementById('popupModal-inner');
      if(popupInnerDiv && !popupModalInnerRef.current.contains(e.target)){ 
        props.handleOutsideClick(false);
      }
    };

    document.addEventListener('click', closeDiv);
    return () => document.removeEventListener('click', closeDiv);  
  }, [])

  return (
    <div id="popupModal">
        {
          <div id="popupModal-inner" ref={popupModalInnerRef}>
            {props.children}
            <button className="btn close-btn" type="button" onClick={props.handlePopupCloseClick}>Close</button>
          </div>
        }
    </div>
  )
}
