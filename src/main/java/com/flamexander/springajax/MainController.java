package com.flamexander.springajax;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.annotation.PostConstruct;

@Controller
public class MainController {
    private int cartCounter;

    @PostConstruct
    public void init() {
        this.cartCounter = 0;
    }

    @PostMapping("/ajax_demo")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public String checkDemo() {
        System.out.println("DEMO");
        cartCounter++;
        return "success";
    }

    @PostMapping("/cart_count_request")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public Integer getCartCount() {
        return cartCounter;
    }

    @GetMapping("/demo")
    public String showDemoPage() {
        return "demo";
    }


}
