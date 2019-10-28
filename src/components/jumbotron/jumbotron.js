import React from 'react';
import "./Jumbotron.css";

const Jumbotron = (props) => (
    <div className="container">
        <div className="jumbotron">
            <h1>South <br />Park</h1>
            <h3>React Clicky Game</h3>
            <h4>Score: {props.score} <span> High Score: {props.highScore} </span></h4>
        </div>
    </div>
)

export default Jumbotron;