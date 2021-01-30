import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerView = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <DatePicker selected={startDate} 
        onChange={
            date => {
                setStartDate(date)
                props.handleDate(date)

            }
        }
        />
        
        
    </div>
   
    
  );
};


export default DatePickerView;