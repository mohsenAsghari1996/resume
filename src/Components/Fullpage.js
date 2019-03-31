/**
 * Created by MOHSEN on 3/30/2019.
 */
import React, {Component} from 'react'
import './Fullpage.css'

export default class Fullpage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {children} = this.props;
        return (
            <div className = {` fullpage ${this.props.className || ''}`} style={{backgroundColor :this.props.background}} >
                {children}
            </div>

        )
    }
}
