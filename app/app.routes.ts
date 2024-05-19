
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Ruta para el componente de registro
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'pending-tasks', pathMatch: 'full' },
      { path: 'pending-tasks', component: PendingTasksComponent },
      { path: 'completed-tasks', component: CompletedTasksComponent },
      { path: 'notifications', component: NotificationsComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }