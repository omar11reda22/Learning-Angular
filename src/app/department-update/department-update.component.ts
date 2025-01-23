import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Department } from '../Models/department';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../Services/department-servises.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-update',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css',
})
export class DepartmentUpdateComponent implements OnInit, OnDestroy {
  deptid: number = 0;
  dept: Department | null = null;
  sub: Subscription | null = null;
  constructor(
    public deptservice: DepartmentService,
    public ac: ActivatedRoute,
    public router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe((data) => {
      const id = Number(data['id']);
      this.dept = this.deptservice.getDepartmentById(id) || null;
    });
    const id = this.ac.snapshot.params['id'];
    this.dept = this.deptservice.getDepartmentById(id) || null;
    // console.log(this.dept);
  }

  hide() {
    this.router.navigateByUrl('/departments');
  }
}
