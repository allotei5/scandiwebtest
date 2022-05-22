import { useState } from "react";

export const FormSize = ({ setAttribute, attributeError }) => {

  const [ formError, setFormError ] = useState("");

  const validateOnChange = e => {
    let errors = 0;
    if(e.target.value < 0) {
      setFormError("Cannot be less than zero");
      errors += 1;
    }

    if(isNaN(e.target.value)) {
      setFormError("Must be number");
      errors += 1;
    }

    if(errors === 0) {
      setFormError("");
      setAttribute({size: e.target.value});
    }
  }

  return (
    <>
      <div className='form-input'>
          <div className='form-label'>
              <label className='form-label'>Size(MB)</label>
          </div>
          <div className="input-container">
            <input type="number" id="size" min="0" placeholder="12" onChange={ e => validateOnChange(e) } />
            { (attributeError !== "") ? <small>{attributeError}</small> : "" } 
            { (formError !== "") ? <small>{formError}</small> : "" } 
          </div>
      </div>
      <small>*Please provide product size in MB*</small>
    </>
    
  )
}
