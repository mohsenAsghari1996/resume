/**
 * Created by MOHSEN on 3/30/2019.
 */
import React, {Component} from 'react'
import Fullpage from '../Components/Fullpage'
import data from "../data.json"
import {SocialIcon} from 'react-social-icons';
import './TitleAndSections.css';
import DownIcon from '../Components/DownIcon'
import {Link, Element} from 'react-scroll'


export default class TitleAndSections extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Fullpage className = "first" background={this.props.background} >
                    <img className = "profile" src = "img/profile.jpeg" />
                    <h1 className = "title" style={{ color: this.props.color }}
                    >
                        {data.title}
                    </h1>
                    <h2  style={{ color: this.props.color }}>
                        {data.subtitle}
                    </h2>
                    <div className="icon-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                    <SocialIcon url = {data.links[key]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                    </div>
                </Fullpage>
                <Link activeClass = "active" to = "about" spy = {true} smooth = {true} offset = {50} duration = {500}
                      delay = {0} >
                    <DownIcon
                        onClick = {() => console.log('im Working')}
                    />
                </Link>
                <Element name = "about" className = "element" >
                </Element>
            </div>

        )
    }
}