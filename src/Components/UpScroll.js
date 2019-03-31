import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import data from "../data.json"

class UpScroll extends Component {
    state = {};
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: this.props.background
                }}
            >
                <Link
                    activeClass="active"
                    to="up"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={0}
                >
                    <img
                        src={data.icons.up}
                        style={{
                            width: "30px"
                        }}
                    />
                </Link>
            </div>
        );
    }
}

export default UpScroll;