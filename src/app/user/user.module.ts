import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { UserRouting } from './user.routing';



@NgModule({
  declarations: [NavbarComponent, LoginComponent, RegisterComponent],
  imports: [
    UserRouting,
    SharedModule,
    CommonModule
  ]
})
export class UserModule { }
