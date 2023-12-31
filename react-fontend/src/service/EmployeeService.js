// Axios là một thư viện HTTP client phổ biến được sử dụng để gửi các yêu cầu HTTP
//và tương tác với các API từ các ứng dụng web hoặc máy chủ.

import axios from "axios";
const EMPLOYEE_API_URL = "http://localhost:8080/api/example/employees";

class EmployeeService {
  // get all employees
  getEmployees() {
    return axios.get(EMPLOYEE_API_URL);
  }
  //create employee
  createEmployee(employee){
    return axios.post(EMPLOYEE_API_URL, employee);
  }

}
//sử dụng export default để xuất đối tượng EmployeeService như một đối tượng duy nhất từ module này
export default new EmployeeService();
