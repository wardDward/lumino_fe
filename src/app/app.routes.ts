import { Routes } from '@angular/router';
import { TemplateComponent as RegularUserTemplate } from './pages/regular-user/template/template.component';
import { LoginComponent } from './pages/public/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent
    },
    {
        path: '',
        title: 'Lumino',
        component: RegularUserTemplate,
        loadChildren: () => import('./pages/regular-user/regular-user.module').then((m) => m.RegularUserModule)
        
    }
];
