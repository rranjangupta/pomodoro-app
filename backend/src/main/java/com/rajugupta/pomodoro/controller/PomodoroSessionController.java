package com.rajugupta.pomodoro.controller;

import com.rajugupta.pomodoro.entity.PomodoroSession;
import com.rajugupta.pomodoro.service.PomodoroSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pomodoro")
public class PomodoroSessionController {

    @Autowired
    private PomodoroSessionService service;

//    @PostMapping("/start")
//    public ResponseEntity<PomodoroSession> startSession(@RequestParam int duration) {
//        PomodoroSession session = service.startSession(duration);
//        return new ResponseEntity<>(session, HttpStatus.CREATED);
//    }

    @GetMapping("/sessions")
    public List<PomodoroSession> getAllSessions() {
        return service.getAllSessions();
    }

    @PostMapping("/complete/{id}")
    public ResponseEntity<Void> completeSession(@PathVariable Long id) {
        service.completeSession(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/start")
    public String startPomodoro(@RequestParam int duration) {
        // Handle the logic to start the Pomodoro session
        return "Pomodoro session started for " + duration + " seconds.";
    }

    @PostMapping("/complete")
    public String completePomodoro() {
        // Handle the logic to complete the Pomodoro session
        return "Pomodoro session completed.";
    }
}
