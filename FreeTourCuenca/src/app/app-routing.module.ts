import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { PostMakerComponent } from './dashboard/post-maker/post-maker.component';
import { TourMakerComponent } from './dashboard/tour-maker/tour-maker.component';
import { TranslateComponent } from './dashboard/translate/translate.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "tours", component: ToursComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component:LoginComponent },
  { path: "dashboard", component:DashboardComponent, children: [
    { path: "", redirectTo: "", pathMatch: "full"},
    { path: "postMaker", component:PostMakerComponent },
    { path: "tourMaker", component:TourMakerComponent },
    { path: "translate", component:TranslateComponent }
  ] },
  { path: "booking", component:BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
