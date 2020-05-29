import React from 'react'

function InputForm(props) {
    return (
        <div class="one-line">
            <div class="left">
                <h1>{props.display}</h1>
            </div>
            <div class="right">
                <input autocomplete='off' id={props.id} type={props.type} onChange={(e) => props.inputChange(props.id, e)} value={props.value} />
                <div id={props.tooltipId}>{props.tooltip}</div>
            </div>
        </div>
    )
}
export default InputForm;