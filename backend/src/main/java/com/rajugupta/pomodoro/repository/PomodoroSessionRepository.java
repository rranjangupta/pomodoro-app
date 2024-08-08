package com.rajugupta.pomodoro.repository;

import com.rajugupta.pomodoro.entity.PomodoroSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PomodoroSessionRepository extends JpaRepository<PomodoroSession, Long> {
    // Custom queries can be added here if needed
}

