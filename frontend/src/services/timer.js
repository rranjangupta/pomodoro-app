import axios from 'axios';

export const startPomodoroSession = (duration) => {
    return axios.post('http://localhost:8080/api/pomodoro/start', { duration });
};

export const completePomodoroSession = () => {
    return axios.post('http://localhost:8080/api/pomodoro/complete');
};

export const getPomodoroSessions = () => {
    return axios.get('/api/pomodoro/sessions');
};
