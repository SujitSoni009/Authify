package com.example.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.auth.entity.User;
import com.example.auth.service.UserService;

@RestController
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return service.signup(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return service.login(user);
    }
}
