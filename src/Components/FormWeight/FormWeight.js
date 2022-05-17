
export const FormWeight = ({ setAttribute, attributeError }) => {
    return (
      <>
        <div className='form-input'>
            <div className='form-label'>
                <label className='form-label'>Weight(KG)</label>
            </div>
            <div className="input-container">
              <input type="number" id="weight" placeholder="" onChange={ e => setAttribute("Weight: " + e.target.value + "KG") }/>
              { (attributeError !== "") ? <small>{attributeError}</small> : "" }
            </div>
            
        </div>
        <small>*Please provide product weight in KG*</small>
      </>
      
    )
  }
  