import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Services/department-servises.service';
import { Department } from '../Models/department';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-list',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  constructor(public deptservice: DepartmentService) {}
  depts: Department[] = [];
  ngOnInit(): void {
    this.depts = this.deptservice.getallDepartments();
  }

  formVisible: boolean = true;

  deleto(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.deptservice.deleteDepartmentById(id);
    }
  }
  viewdetail(id: number) {}

  toggleForm() {
    this.formVisible = !this.formVisible;
  }
}
