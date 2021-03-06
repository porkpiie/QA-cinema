import React from 'react';

const CheckBox = props => {
    console.log(props);
    return (
      <div className="form-group">
        <label for={props.name} className="form-label">
          {props.title}
        </label>
        <div className="radio">
          {props.options.map(option => {
            return (
              <label key={option} className="radio-inline" style={{ padding : "10px"}}>
                <input
                  id={props.name}
                  name={props.name}
                  onChange={props.handleChange}
                  value={option}
                  checked={props.selectedOptions.indexOf(option) > -1}
                  type="radio"
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default CheckBox;
