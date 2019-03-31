import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigation.css";
class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar" style={{ background: "transparent" }}>

                <div classID="skillsNavigation">
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <a href="">Skills</a>
                    </Link>
                </div>

                <div classID="aboutNavigation">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={0}
                    >
                        <a href="">About</a>
                    </Link>
                </div>


            </div>
        );
    }
}

export default Navigation;