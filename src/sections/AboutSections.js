
import React, {Component} from 'react'
import Fullpage from '../Components/Fullpage'
import data from "../data.json"
import './AboutSections.css'
import {Link, Element} from 'react-scroll'
import DownIcon from '../Components/DownIcon'

export default class AboutSections extends Component {
    constructor(props){
        super(props)
    }


    render() {
        let fontColor = ["white", "#93b2ff", "#961955", "#a5cef7"];
        return (

            <div  >
                <Fullpage className = "second"  background={this.props.background} >
                    <h1><b style={{color : fontColor[this.props.counter]}}>
                        {data.sections[0].title}
                    </b></h1>
                    <p className = "aboutText" style={{ color: fontColor[this.props.counter] }} >
                        {data.sections[0].items[0].content}
                        <br/>
                        {data.sections[0].items[1].content}
                        <br/>
                        {data.sections[0].items[2].content}
                    </p>
                </Fullpage>

                <Link activeClass = "active" to = "skils" spy = {true} smooth = {true} offset = {50} duration = {500}
                      delay = {0} >
                    <DownIcon
                        onClick = {() => console.log('im Working')}
                    />
                </Link>
                <Element name = "skils" className = "element" >
                </Element>

            </div>

        )
    }
}