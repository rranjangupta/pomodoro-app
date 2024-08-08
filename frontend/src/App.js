import React from 'react';
import './App.css';  // Make sure your CSS file is correctly linked

function PomodoroTimer() {
    return (
        <div className="pomodoro-background">
            <div className="pomodoro-button-group">
                <button className="pomodoro-button">pomodoro</button>
                <button className="pomodoro-button">short break</button>
                <button className="pomodoro-button">long break</button>
            </div>
            <div className="pomodoro-timer">10:00</div>
            <div className="pomodoro-button-group">
                <button className="pomodoro-start-reset">start</button>
                <button className="pomodoro-start-reset">&#8635;</button>
                <button className="pomodoro-start-reset">&#9881;</button>
            </div>
        </div>
    );
}

export default PomodoroTimer;
