import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { EmailConfirmComponent } from './authentication/email-confirm/email-confirm.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {path:'admin',
    canActivate:[authGuard],

    loadChildren:()=>
        import('./modules/admin/admin.module').then(m=>m.AdminModule)},



    {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},



    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'confirm-email',component:EmailConfirmComponent},
    { path: 'confirm-email/:result', component: EmailConfirmComponent },




    {path:'**', component:NotFoundComponent},
];
