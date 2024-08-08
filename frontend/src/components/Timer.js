import React, { useState, useEffect } from 'react';
import { startPomodoroSession, completePomodoroSession } from '../services/timer';
import './Timer.css';

const Timer = () => {
    const [time, setTime] = useState(1500); // Default 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [sessions, setSessions] = useState([]);
    const [customMinutes, setCustomMinutes] = useState(25); // Default to 25 minutes

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        if (time === 0 && isActive) {
            setIsActive(false);
            completePomodoroSession(); // Complete session when time runs out
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const handleStart = () => {
        setIsActive(true);
        startPomodoroSession(time).then(response => {
            console.log('Session started:', response.data);
        }).catch(error => {
            console.error('Error starting session:', error);
        });
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(customMinutes * 60);
    };

    const handleCustomTimeChange = (event) => {
        const minutes = parseInt(event.target.value, 10);
        setCustomMinutes(minutes);
        setTime(minutes * 60);
    };

    return (
        <div className="timer-container">
            <div className="timer-display">
                <h1>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</h1>
            </div>
            <div className="timer-controls">
                <input 
                    type="number" 
                    min="1" 
                    max="60" 
                    value={customMinutes} 
                    onChange={handleCustomTimeChange}
                    className="time-input"
                />
                <button onClick={handleStart} disabled={isActive} className="start-button">Start</button>
                <button onClick={handleReset} className="reset-button">Reset</button>
            </div>
            <div className="session-history">
                <h2>Session History</h2>
                <ul>
                    {sessions.map(session => (
                        <li key={session.id}>{`Session ${session.id}: ${session.duration} seconds, Completed: ${session.isCompleted}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Timer;
