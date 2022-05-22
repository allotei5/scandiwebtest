import { useState, useEffect } from "react"

export const FormDimension = ({ setAttribute, attributeError }) => {

    const [ height, setHeight ] = useState("");
    const [ width, setWidth ] = useState("");
    const [ length, setLength ] = useState("");

    const [ heightError, setHeightError ] = useState("");
    const [ widthError, setWidthError ] = useState("");
    const [ lengthError, setLengthError ] = useState("");

    useEffect(() => {
        let errors = 0;
        setHeightError("");
        setWidthError("");
        setLengthError("");

        if(height<0) {
            errors += 1;
            setHeightError("Height can't be less than zero")
        }


        if(isNaN(height)) {
            setHeightError("Height must be a number");
        }

        if(width<0) {
            errors += 1;
            setWidthError("Width can't be less than zero")
        }

        if(isNaN(width)) {
            errors += 1;
            setWidthError("Width must be a number");
        }

        if(length<0) {
            errors += 1;
            setLengthError("Length can't be less than zero");
        }

        if(isNaN(length)) {
            errors += 1;
            setLengthError("Length must be a number")
        }

        if(errors !== 0) {
            if (height !== "" && width !== "" && length !== "") {
                setAttribute({
                    height,
                    width,
                    length
                })
            }
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
                        <input type="number" min="0" id="height" placeholder="1" onChange={e => {setHeight(e.target.value)}} />
                        { (height === "") ? <small>{attributeError}</small> : "" }
                        { (heightError !== "") ? <small>{heightError}</small> : "" }
                    </div>
                </div>
                <div className='form-input'>
                    <div className='form-label'>
                        <label className='form-label'>Width(CM)</label>
                    </div>
                    <div className="input-container">
                        <input type="number" min="0" id="width" placeholder="1" onChange={e => { setWidth(e.target.value)}} />
                        { (width === "") ? <small>{attributeError}</small> : "" }
                        { (widthError !== "") ? <small>{widthError}</small> : "" }
                    </div>
                </div>
                <div className='form-input'>
                    <div className='form-label'>
                        <label className='form-label'>Length(CM)</label>
                    </div>
                    <div className="input-container">
                        <input type="number" min="0" id="length" placeholder="1" onChange={e => { setLength(e.target.value)}} />
                        { (length === "") ? <small>{attributeError}</small> : "" }
                        { (lengthError !== "") ? <small>{lengthError}</small> : "" }
                    </div>
                </div>
        </div>
        <small>*Please provide product dimensions in HxWxL*</small>
      </>
    )
  }
  