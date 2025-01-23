import { Injectable } from '@angular/core';
import { Department } from '../Models/department';

// inject in root now u can inject it in ctor in any component will create a one instanse 
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departments: Department[] = [
    { id: 1, name: 'PD' , address:'sohag' },
    { id: 2, name: 'AI' , address:'mansoura' },
    { id: 3, name: 'OS' ,address: 'alex'},
    { id: 4, name: 'HR', address: 'cairo' },
    { id: 5, name: 'Finance', address: 'giza' },
    { id: 6, name: 'Marketing', address: 'aswan' },
    { id: 7, name: 'Sales', address: 'luxor' },
    { id: 8, name: 'IT', address: 'tanta' },
    { id: 9, name: 'Logistics', address: 'fayoum' },
    { id: 10, name: 'Procurement', address: 'ismailia' },
    { id: 11, name: 'Legal', address: 'port said' },
    { id: 12, name: 'R&D', address: 'suez' },
    { id: 13, name: 'Customer Service', address: 'sharm el-sheikh' },
    { id: 14, name: 'Administration', address: 'hurghada' },
    { id: 15, name: 'Quality Assurance', address: 'minya' }
    
  ];

  constructor() {}
  addDepartment(newDepartment: Department): void {
    this.departments.push(newDepartment);
  }

  getallDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find((department) => department.id === id);
  }

  updateDepartment(updatedDepartment: Department): void {
    const index = this.departments.findIndex(
      (department) => department.id === updatedDepartment.id
    );
    if (index !== -1) {
      this.departments[index] = updatedDepartment;
    }
  }

  deleteDepartmentById(id: number): void {
    this.departments = this.departments.filter(
      (department) => department.id !== id
    );
  }
}
