import React, {Component} from 'react'
import Fullpage from '../Components/Fullpage'
import data from "../data.json"
import './SkillSections.css';
import SkillCard from '../Components/SkillCard'
import UpScroll from '../Components/UpScroll'


export default class SkillSections extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div  >
                <Fullpage className = "third" background={this.props.background}>
                    <h1 ><b className = "skillsTitle" ><h1>{data.sections[1].title}</h1></b></h1>
                    <div className = "cards-wrapper" >
                        {data.sections[1].items.map(eachskill => {
                            return (
                                <SkillCard skill = {eachskill} />
                            )
                        })}
                    </div>
                </Fullpage>
                <UpScroll background = {this.props.background} />


            </div>

        )
    }
}