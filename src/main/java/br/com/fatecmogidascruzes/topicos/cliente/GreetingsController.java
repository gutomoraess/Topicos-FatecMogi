package br.com.fatecmogidascruzes.topicos.cliente;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/say")
public class GreetingsController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello!";
    }

    @GetMapping("/hi")
    public String higet(@RequestParam("name") String name) {
        return "Hello " + name + "!";
    }

    @PostMapping("/hi")
    public String hipost(@RequestBody GreetingsHiPOST personData) {
        return "Hello " + personData.getName() + "! Your e-mail is " + personData.getEmail();
    }

    @RequestMapping("/hey/{name}")
    public String hey(@PathVariable("name") String name) {
        return "Hey " + name + "!";
    }

}
