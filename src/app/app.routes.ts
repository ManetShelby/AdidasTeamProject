import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Shop } from './shop/shop';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'shop',component:Shop},
    {path:'contact',component:Contact},
];
