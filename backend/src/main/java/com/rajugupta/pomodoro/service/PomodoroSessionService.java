package com.rajugupta.pomodoro.service;

import com.rajugupta.pomodoro.entity.PomodoroSession;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PomodoroSessionService {
    PomodoroSession startSession(int duration);
    List<PomodoroSession> getAllSessions();
    void completeSession(Long id);
}
