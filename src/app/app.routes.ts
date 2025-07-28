import { Routes } from '@angular/router';
import { Template as RegularUserTemplate } from './pages/regular-user/template/template';

export const routes: Routes = [
    {
        path: '',
        component: RegularUserTemplate,
        loadChildren: () => import('./pages/regular-user/regular-user.module').then((m) => m.RegularUserModule)
        
    }
];
