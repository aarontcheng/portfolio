import {useState} from 'react';
import './Project.css';

function Project(props){

    // useState(initial state)

    addBullets = () => {
        return this.props.bullets.entries().map(([key, value]) =>
            <li>{value}</li>
        );
    }

    return (
        <>
            <div className="project">
                <h4>{this.props.name}</h4>
                <a href={this.props.link}></a>
                <img src={this.props.image}></img>
                <br/>
                <br/>
                <ul>
                    {this.addBullets()}
                </ul>
            </div>
            
            


        </>
    )

} export default Project