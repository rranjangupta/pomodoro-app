package com.rajugupta.pomodoro.service;

import com.rajugupta.pomodoro.entity.PomodoroSession;
import com.rajugupta.pomodoro.repository.PomodoroSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PomodoroSessionServiceImpl implements PomodoroSessionService {

    @Autowired
    private PomodoroSessionRepository repository;

    @Override
    public PomodoroSession startSession(int duration) {
        PomodoroSession session = new PomodoroSession(duration, LocalDateTime.now(), false);
        return repository.save(session);
    }

    public List<PomodoroSession> getAllSessions() {
        return repository.findAll();
    }

    public void completeSession(Long sessionId) {
        PomodoroSession session = repository.findById(sessionId).orElseThrow();
        session.setCompleted(true);
        repository.save(session);
    }
}

