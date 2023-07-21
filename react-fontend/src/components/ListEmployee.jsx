//import React và Component từ module "react" được sử dụng để tạo
//và quản lý các thành phần trong ứng dụng React
import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";
class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //khởi tạo mảng trống
      employess: [],
    };

    //sử dụng để ràng buộc (bind) phương thức addEmployee() với đối tượng (instance) của lớp Employees.
    this.addEmployee = this.addEmployee.bind(this);
  }
  //gọi API thông qua EmployeeService.getEmployees()
  //Khi yêu cầu trả về dữ liệu từ API, chúng ta sử dụng phương thức then() để xử lý kết quả trả về

  componentDidMount() {
    EmployeeService.getEmployees().then((responese) => {
      this.setState({ employess: responese.data });
    });
  }

  // Đoạn mã này sử dụng thư viện react-router-dom để chuyển hướng người dùng đến một đường dẫn khác trong ứng dụng.
  addEmployee() {
    this.props.history.push("/add-employee");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">List Employee</h2>

        <button class="btn btn-success"onClick={this.addEmployee}>
          Add Employee
        </button>

        <div className="row">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Fist Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employess.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employees;
