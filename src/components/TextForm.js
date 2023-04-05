import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm({ heading }) {
    const [text, setText] = useState("")

    const onUppercaseButtonClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }

    const onLowercaseButtonClick = () => {
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
    }

    const onClearButtonClick = () => {
        setText("");
    }

    const onTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <h2>{heading}</h2>
                <div className='mb-3'>
                    <textarea className='form-control' id='myBox' rows="8" value={text} onChange={onTextChange}></textarea>
                    <button className="btn btn-primary my-3" onClick={onUppercaseButtonClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={onLowercaseButtonClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3" onClick={onClearButtonClick}>Clear Text</button>
                </div>
            </div>

            <div className="container">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters </p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}

export default TextForm

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
