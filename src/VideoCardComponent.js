import React, { Component } from 'react';
import classes1 from './Counter.module.css';
class Counter1 extends Component {
    constructor(props){
        super(props);
            console.log("constructor1");
    }
    componentDidMount() {
        console.log("ComponentDidMount1");
    }
    render() {
        console.log("render1");
        return (
            <div className = {classes1.VideoCard}>
                <img src = {this.props.videoThumb} alt ="Video Thumbnail" />
        <h3>{this.props.videoTitle}</h3>
            </div>
        );
    }
}
export default Counter1;