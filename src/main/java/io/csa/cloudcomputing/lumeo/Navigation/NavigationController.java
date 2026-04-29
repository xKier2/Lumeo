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
//        courses.add(new Course("Data Structures & Algorithms", "Dr. Alaric Vance", "40 students", "Mon, Wed - 09:00 AM - 10:30 AM", "#4169E1"));
//        courses.add(new Course("Operating Systems", "Prof. Elena Sterling", "32 students", "Mon, Wed - 11:00 AM - 12:30 PM", "#708090"));
//        courses.add(new Course("Artificial Intelligence", "Dr. Julian Thorne", "52 students", "Mon, Wed - 02:00 PM - 03:30 PM", "#673AB7"));
//        courses.add(new Course("Database Management System", "Prof. Silas Halloway", "30 students", "Tue, Thu - 08:30 AM - 10:00 AM", "#2E8B57"));
//        courses.add(new Course("Software Engineering Fundamentals 101", "Dr. Nadia Voss", "65 students", "Friday - 09:00 AM - 12:00 PM", "#008080"));
//
//        model.addAttribute("courses", courses);
        System.out.println("Dashboard Clicked!");
        return new ModelAndView("Dashboard");
    }

    @GetMapping("/Courses")
    public ModelAndView getCourses() {
        List<Course> courses = new ArrayList<>();
//
//        // Adding sample data
//        courses.add(new Course("Data Structures & Algorithms", "Dr. Alaric Vance", "40 students", "Mon, Wed - 09:00 AM - 10:30 AM", "#4169E1"));
//        courses.add(new Course("Operating Systems", "Prof. Elena Sterling", "32 students", "Mon, Wed - 11:00 AM - 12:30 PM", "#708090"));
//        courses.add(new Course("Artificial Intelligence", "Dr. Julian Thorne", "52 students", "Mon, Wed - 02:00 PM - 03:30 PM", "#673AB7"));
//        courses.add(new Course("Database Management System", "Prof. Silas Halloway", "30 students", "Tue, Thu - 08:30 AM - 10:00 AM", "#2E8B57"));
//        courses.add(new Course("Software Engineering Fundamentals 101", "Dr. Nadia Voss", "65 students", "Friday - 09:00 AM - 12:00 PM", "#008080"));

        ModelAndView mav = new ModelAndView("Courses");
        mav.addObject("courses", courses);
        return mav;
    }

    @GetMapping("/Schedule")
    public ModelAndView Schedule() {
        System.out.println("Schedule Clicked!");
        return new ModelAndView("Schedule");
    }
}