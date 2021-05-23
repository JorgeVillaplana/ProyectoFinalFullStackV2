import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { BookingComponent } from './booking/booking.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostMakerComponent } from './dashboard/post-maker/post-maker.component';
import { TourMakerComponent } from './dashboard/tour-maker/tour-maker.component';
import { TranslateComponent } from './dashboard/translate/translate.component';
import { GuidesComponent } from './dashboard/guides/guides.component';
import { UsersComponent } from './dashboard/users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "tours", component: ToursComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component:LoginComponent },
  { path: "dashboard", component:DashboardComponent, children: [
    { path: "", redirectTo: "", pathMatch: "full"},
    { path: "post-maker", component:PostMakerComponent },
    { path: "tour-maker", component:TourMakerComponent },
    { path: "translate", component:TranslateComponent },
    { path: "guides", component:GuidesComponent },
    { path: "users", component:UsersComponent }
  ] },
  { path: "booking", component:BookingComponent },
  { path: "faq", component:FaqComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
