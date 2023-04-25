import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';

const routes: Routes = [
  { 
    path: 'members', 
    loadChildren: () =>
    import('../app/members/members.module').then((m) => m.MembersModule),
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  { 
    path: 'not-authorization', 
    component: NotAuthorizedComponent
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
