import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () =>
    import('../app/home/home.module').then((m) => m.HomeModule),
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: 'members', 
    loadChildren: () =>
    import('../app/members/members.module').then((m) => m.MembersModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
