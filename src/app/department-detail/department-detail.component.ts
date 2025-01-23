import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../Models/department';
import { DepartmentService } from '../Services/department-servises.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-detail',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent implements OnInit , OnDestroy {
  deptid: number = 0;
  dept:Department |null = null;
  constructor(public deptservice:DepartmentService , public ac:ActivatedRoute , public router:Router) {}
  
  ngOnDestroy(): void {
 this.sub?.unsubscribe();
  }
  sub:Subscription|null = null;
  ngOnInit(): void {
 this.sub = this.ac.params.subscribe((data) => {
const id = Number(data['id']);
this.dept = this.deptservice.getDepartmentById(id) || null });
 const id = this.ac.snapshot.params['id'];
 this.dept = this.deptservice.getDepartmentById(id) || null;
  }
hide(){
  this.router.navigateByUrl('/departments');
}
}
