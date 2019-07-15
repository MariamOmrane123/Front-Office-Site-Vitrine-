import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { UserModule } from './user/user.module';

export function loadUserModule() {
  return UserModule;
}
export const routes: Routes = [
      {
      path : '',
      component : FullLayoutComponent,
      children:[
        {
          path: '',
          component: ListProduitsComponent
        },
        {
          path: 'user',
          loadChildren: loadUserModule
        }
      ]
    }
  ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule {
    }