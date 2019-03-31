import React, {Component} from 'react'
import data from "../data.json"

const DownIcon =(props) => {
    return (
        <div
            onClick={props.onClick}
            style = {{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "-34px",
                transform: "translateY(-45px)"
            }}
        >
            <div style = {{
                maxWidth: '32px'
            }} >
                <img src = {data.icons.down} />

            </div>

        </div>
    )
}
export default DownIcon
