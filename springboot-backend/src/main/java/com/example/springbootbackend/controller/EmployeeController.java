package com.example.springbootbackend.controller;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Employee;
import com.example.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/example/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    // create a new employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    /*ResponseEntity: được sử dụng để đại diện cho một phản hồi HTTP mà bạn có thể trả về từ các phương thức điều hướng (controller methods) trong ứng dụng Spring.
     *Có thể trả về bất kỳ kiểu dữ liệu nào: Bạn có thể sử dụng ResponseEntity để trả về các đối tượng Java thông thường, các kiểu dữ liệu nguyên thủy, hoặc thậm chí là các đối tượng JSON hoặc XML nếu bạn đã cấu hình chúng.
     */
    //get by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getByIdEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
        return ResponseEntity.ok(employee);
    }
    //update employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Employee employ = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
        employ.setFirstName(employee.getFirstName());
        employ.setLastName(employee.getLastName());
        employ.setEmailId(employee.getEmailId());

        Employee employeeUpdate = employeeRepository.save(employ);
        return ResponseEntity.ok(employeeUpdate);
    }

}
