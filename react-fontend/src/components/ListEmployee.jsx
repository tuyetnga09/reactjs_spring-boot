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
  }
  //gọi API thông qua EmployeeService.getEmployees() 
  //Khi yêu cầu trả về dữ liệu từ API, chúng ta sử dụng phương thức then() để xử lý kết quả trả về
  
  componentDidMount(){
    EmployeeService.getEmployees().then((responese) =>{
      this.setState({employess: responese.data})
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">List Employee</h2>
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
                {
                    this.state.employess.map((
                        employee, index )=> 
                        <tr key={employee.id}>
                           <td>{index + 1}</td>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employees;
