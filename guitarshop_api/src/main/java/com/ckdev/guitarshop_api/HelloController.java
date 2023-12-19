package com.ckdev.guitarshop_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/helloworld")
    public String hello(){
        return "Hello! World";
    }
}
