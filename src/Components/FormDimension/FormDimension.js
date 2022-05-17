import { useState, useEffect } from "react"

export const FormDimension = ({ setAttribute, attributeError }) => {

    const [ height, setHeight ] = useState("");
    const [ width, setWidth ] = useState("");
    const [ length, setLength ] = useState("");

    useEffect(() => {

        if (height !== "" && width !== "" && length !== "") {
            setAttribute("Dimension: " + height + "x" + width + "x" + length)
        }

    }, [height, width, length])    

    return (
      <>
        <div>
            <div className='form-input'>
                    <div className='form-label'>
                        <label className='form-label'>Height(CM)</label>
                    </div>
                    <div className="input-container">
                        <input type="number" id="height" placeholder="" onChange={e => {setHeight(e.target.value)}} />
                        { (height === "") ? <small>{attributeError}</small> : "" }
                    </div>
                </div>
                <div className='form-input'>
                    <div className='form-label'>
                        <label className='form-label'>Width(CM)</label>
                    </div>
                    <div className="input-container">
                        <input type="number" id="width" placeholder="" onChange={e => { setWidth(e.target.value)}} />
                        { (width === "") ? <small>{attributeError}</small> : "" }
                    </div>
                </div>
                <div className='form-input'>
                    <div className='form-label'>
                        <label className='form-label'>Length(CM)</label>
                    </div>
                    <div className="input-container">
                        <input type="number" id="length" placeholder="" onChange={e => { setLength(e.target.value)}} />
                        { (length === "") ? <small>{attributeError}</small> : "" }
                    </div>
                </div>
        </div>
        <small>*Please provide product dimensions in HxWxL*</small>
      </>
    )
  }
  