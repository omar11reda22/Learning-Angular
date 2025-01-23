import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../Models/department';
import { DepartmentService } from '../Services/department-servises.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-add',
  imports: [FormsModule , RouterLink , RouterOutlet],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css',
})
export class DepartmentAddComponent {
  dept: Department = new Department(0 ,'','');
  /**
   *
   */

  // inject service in constructor to use it 

  constructor(public deptservice: DepartmentService, public router: Router) {}
 save(){
  this.deptservice.addDepartment(this.dept);
  this.router.navigateByUrl('/departments');
 }


}
