import React, {Component} from 'react';
import data from "./data.json"
import './App.css';
import './Components/Navigation.css';
import TitleAndSections from './sections/TitleAndSections'
import AboutSections from './sections/AboutSections'
import SkillSections from './sections/SkillSections'
import {Element} from 'react-scroll'
import Navigation from "./Components/Navigation";
import SnowStorm from 'react-snowstorm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
            background_first: "#c3d2e0",
            background_second: "#282c34",
            background_third: " #c3c8cc",
            counter: 0
        };
    }
    changeColor = () => {
        let fontColor = ["#338931", "#961955", "#592121", "#a51b0e"];
        let backgroundColorFirst = ["#faffd6", "#c4ffef", "#f7d8d7", "#c2d3fc"];
        let backgroundColorSecond = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
        let backgroundColorThird = ["#011f4b", "#1e1f26", "#461220", "#251e3e"];
        if (this.state.counter > 3) {
            this.setState({
                counter: 0,
                color: fontColor[this.state.counter],
                background_first: " #c3d2e0",
                background_second: " #282c34",
                background_third: " #c3c8cc"
            });
        } else
            this.setState({
                color: fontColor[this.state.counter],
                background_first: backgroundColorFirst[this.state.counter],
                background_second: backgroundColorSecond[this.state.counter],
                background_third: backgroundColorThird[this.state.counter],
                counter: this.state.counter + 1
            });
    };
    render() {
        console.log('in app js :' ,this.state.counter)
        return (
            <div className = "App" >
                <SnowStorm animationInterval = {20} snowCharacter = {"# m %& ^ ** @ !! ?? // **"} vMaxY={5} vMaxX ={5}/>
                <Element name="up" className="element" />
                <Navigation />
                <div className="changetheme">
                    <img onClick={this.changeColor} src={data.icons.changeTheme} alt="no img" />
                </div>
                <TitleAndSections
                    color={this.state.color}
                    background={this.state.background_first}/>
                <Element name="about" className="element" />
                <AboutSections
                    counter={this.state.counter}
                    background={this.state.background_second}/>
                <Element name="skills" className="element" />
                <SkillSections
                    color={this.state.color}
                    background={this.state.background_third}/>
            </div>
    );
    }
    }

    export default App;
