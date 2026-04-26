package com.example.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.auth.entity.User;
import com.example.auth.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String signup(User user) {
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            return "User already exists!";
        }
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
        return "Signup successful!";
    }

    public String login(User user) {
        return repo.findByEmail(user.getEmail())
                .map(u -> encoder.matches(user.getPassword(), u.getPassword()) 
                    ? "Login successful!" 
                    : "Invalid password")
                .orElse("User not found");
    }
}