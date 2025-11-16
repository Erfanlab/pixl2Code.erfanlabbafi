import { Routes } from '@angular/router';
import { Admin } from '../components/admin/admin';
import { Pixl2codeContainer } from '../components/pixl2code-container/pixl2code-container';

export const routes: Routes = [
    {
        path: '',
        component: Pixl2codeContainer,
      },
      {
        path: 'admin',
        component: Admin,
      },
];
