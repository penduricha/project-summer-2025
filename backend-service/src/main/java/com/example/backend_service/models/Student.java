package com.example.backend_service.models;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

@Entity
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "students")
public class Student implements Serializable {
    @Id
    @Column(nullable = false)
    private Long studentID;
    //@GeneratedValue(strategy = GenerationType.IDENTITY)

    private String password;

    /* random: 21xx xxxx (Long) no same size = 3400 */
    /* 1600 clc and 1800 dai tra*/
    @Min(value = 1, message = "Number of courses must be greater than 0.")
    private int numberCourse;

    @Min(value = 1900, message = "Number of start year must be greater than 1990.")
    @Max(value = 2100, message = "Number of start year must be lower than 2110.")
    private int startYear;

    @Min(value = 1900, message = "Number of end year must be greater than 1990.")
    @Max(value = 2100, message = "Number of end year must be lower than 2110.")
    private int endYear;
}
