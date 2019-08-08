import React from 'react';

const Input = props => {
    console.log(props.value);

    const groupClass = 'inline' in props ? 'form-group row' : 'form-group';
    const labelClass = 'inline' in props ? 'form-label col-sm-4 col-form-label' : 'form-label';
    const inputClass = 'inline' in props ? 'form-control col-sm-8' : 'form-control';

    return (
      <div className={groupClass}>
        <label for={props.name} className={labelClass}>
          {props.title}
        </label>
        <input
          className={inputClass}
          id={props.name}
          name={props.name}
          type={props.inputType}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    );
  };
  
  export default Input;