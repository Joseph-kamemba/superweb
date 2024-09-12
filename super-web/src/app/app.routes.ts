import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ScreensModule} from './screens/screens.module';
import { WidgetsComponent } from './screens/widgets/widgets.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SignUpComponent } from './sign-up/sign-up.component';



export const routes: Routes = [
    {path: '', redirectTo: 'signin', pathMatch:"full"},
    { path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path:'', component:MainLayoutComponent,
        children:[
            
{path: 'dashboard', component: DashboardComponent},
{path: 'widgets' , component: WidgetsComponent},
        ]
    }
];
