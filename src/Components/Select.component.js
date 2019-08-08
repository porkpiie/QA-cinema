import React from 'react';

const Select = props => {

    const groupClass = 'inline' in props ? 'form-group row' : 'form-group';
    const labelClass = 'inline' in props ? 'form-label col-sm-4 col-form-label' : 'form-label';
    const selectClass = 'inline' in props ? 'form-control col-sm-8' : 'form-control';
    return (
      <div className={groupClass}>
      <label for={props.name} className={labelClass}>
        {props.title}
      </label>
        <select
          className={selectClass}
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          {...props}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map(option => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>  
    );
  };


  
  export default Select;