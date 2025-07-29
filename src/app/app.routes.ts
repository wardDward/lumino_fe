import { Routes } from '@angular/router';
import { TemplateComponent as RegularUserTemplate } from './pages/regular-user/template/template.component';
import { LoginComponent } from './pages/public/auth/login/login.component';
import { RegisterComponent } from './pages/public/auth/register/register.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent
    },
    {
        path: 'register',
        title: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        title: 'Lumino',
        component: RegularUserTemplate,
        loadChildren: () => import('./pages/regular-user/regular-user.module').then((m) => m.RegularUserModule)
        
    }
];
