package io.csa.cloudcomputing.lumeo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class LumeoApplication {

    public static void main(String[] args) {
        SpringApplication.run(LumeoApplication.class, args);
    }

    @RestController
    class TestController {
        @GetMapping("/ping")
        public String ping() {
            return "I am alive!";
        }
    }

}
