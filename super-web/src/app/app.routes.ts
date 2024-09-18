import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotDialogComponent } from './forgot-dialog/forgot-dialog.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';


export const routes: Routes = [
    {path: '', redirectTo: 'signin', pathMatch:"full"},
    { path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'forgotpassword' , component: ForgotPasswordComponent},
    {path: 'forgotdialog', component:ForgotDialogComponent},
    {path:'', component:MainLayoutComponent,
        children:[
            
{path: 'dashboard', component: DashboardComponent},
{path: 'widgets' , component: WidgetsComponent},
{path: 'shoppingcarts', component: ShoppingCartsComponent}
        ]
    }
];
