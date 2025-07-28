import { Routes } from '@angular/router';
import { Template as RegularUserTemplate } from './pages/regular-user/template/template';
import { Login } from './pages/public/login/login';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        component: Login
    },
    {
        path: '',
        title: 'Lumino',
        component: RegularUserTemplate,
        loadChildren: () => import('./pages/regular-user/regular-user.module').then((m) => m.RegularUserModule)
        
    }
];
