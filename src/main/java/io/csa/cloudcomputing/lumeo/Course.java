package io.csa.cloudcomputing.lumeo;

public class Course {
    private final String name;
    private final String instructor;
    private final String schedule;
    private final String students;
    private final String color;

    public Course(String name, String instructor, String students, String schedule, String color) {
        this.name = name;
        this.instructor = instructor;
        this.students = students;
        this.schedule = schedule;
        this.color = color;
    }

    public String getName() { return name; }
    public String getInstructor() { return instructor; }
    public String getStudents() { return students; }
    public String getSchedule() { return schedule; }
    public String getColor() { return color; }
}