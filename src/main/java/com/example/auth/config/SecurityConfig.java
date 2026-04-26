package com.example.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/signup", "/login", "/h2-console/**", "/index.html", "/dashboard.html", "/index.css", "/index.js").permitAll()
                .anyRequest().authenticated()
                .and()
                .headers().frameOptions().disable(); // for H2 console

        return http.build();
    }
}
