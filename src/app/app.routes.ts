import { Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AccountService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path:"departments" , component: DepartmentListComponent,children:[
        { path: 'add', component: DepartmentAddComponent },
        { path: 'update/:id', component: DepartmentUpdateComponent },
        { path: 'details/:id', component: DepartmentDetailComponent }
    ]},
    {path:"login" , component:LoginComponent},
    {path:"register",component:RegisterComponent}, 
    {path:"Home",component:HomeComponent} 
];
