package io.csa.cloudcomputing.lumeo.Navigation;

import io.csa.cloudcomputing.lumeo.Course;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class NavigationController {
    @GetMapping("/")
    public String landing() {
        return "index"; // Looks for templates/index.html
    }

    @GetMapping("/Dashboard")
    public ModelAndView Dashboard(Model model) {
        List<Course> courses = new ArrayList<>();
        courses.add(new Course("Computer Science 301", "Dr. Sarah Johnson", "45 students", "Mon, Wed, Fri - 10:00 AM", "#3b82f6"));
        courses.add(new Course("Computer Science 301", "Dr. Sarah Johnson", "45 students", "Mon, Wed, Fri - 10:00 AM", "#3b82f6"));
        courses.add(new Course("Computer Science 301", "Dr. Sarah Johnson", "45 students", "Mon, Wed, Fri - 10:00 AM", "#3b82f6"));
        courses.add(new Course("Computer Science 301", "Dr. Sarah Johnson", "45 students", "Mon, Wed, Fri - 10:00 AM", "#3b82f6"));

        model.addAttribute("courses", courses);
        System.out.println("Dashboard Clicked!");
        return new ModelAndView("Dashboard");
    }

    @GetMapping("/Courses")
    public ModelAndView Courses() {
        System.out.println("Courses Clicked!");
        return new ModelAndView("Courses");
    }

    @GetMapping("/Schedule")
    public ModelAndView Schedule() {
        System.out.println("Schedule Clicked!");
        return new ModelAndView("Schedule");
    }
}