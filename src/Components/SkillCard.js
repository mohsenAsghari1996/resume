import React, {Component} from 'react'
import './SkillCard.css'

export default class SkillCard extends Component {
    render() {
        const {skill} = this.props;
        return (
            <div className = "card" >
                <div className = "image-wrapper" >
                    <img  src ={skill.content.image}/>
                </div>
                <div className = "skill-title-wrapper" >
                    <h3>{skill.content.title}</h3>
                </div>
            </div>

        )
    }
}
