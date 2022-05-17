
export const FormSize = ({ setAttribute, attributeError }) => {

  return (
    <>
      <div className='form-input'>
          <div className='form-label'>
              <label className='form-label'>Size(MB)</label>
          </div>
          <div className="input-container">
            <input type="number" id="size" placeholder="" onChange={ e => setAttribute("Size: " + e.target.value + "MB") } />
            { (attributeError !== "") ? <small>{attributeError}</small> : "" }
          </div>
      </div>
      <small>*Please provide product size in MB*</small>
    </>
    
  )
}
