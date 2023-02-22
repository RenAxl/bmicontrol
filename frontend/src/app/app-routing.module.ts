import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { 
    path: 'members', 
    loadChildren: () =>
    import('../app/members/members.module').then((m) => m.MembersModule),
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  { 
    path: 'page-not-found', 
    component: PageNotFoundComponent 
  },
  { 
    path: '**', 
    redirectTo: 'page-not-found' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
