import React, { Component } from 'react';
import { Card } from 'antd';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="cover">
                    <center>
                        <img alt="cover-view" src={require('../resources/widescreen1.jpg')} width="800" height="450"/>
                    </center>
                </div>
                <center classname="container">
                    <br/><h1 className="type-animation">Hi, My Name Is Simrandeep!</h1>
                    <Card title="Bio"  style={{ width: 1000 }}>
                        <p>Welcome to my website! My name is Simrandeep Bajwa and I am a 3rd year Computer Science student at the University 
                            of Guelph. Through this website my main focus is to capture all of my experiences related to software development. 
                            I hope you as a reader are able to relive some of these experiences.</p>
                    </Card>
                </center>
            </div>
        );
    }
}

export default HomePage;