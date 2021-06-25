
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
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalComponent } from './legal/legal.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "coming-soon", component: ComingSoonComponent},
  { path: "tours", redirectTo: "coming-soon", component: ToursComponent },
  { path: "about-us", redirectTo: "coming-soon", component: AboutUsComponent },
  { path: "blog", redirectTo: "coming-soon",component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "aviso-legal", component: LegalComponent },
  { path: "politica-privacidad", component: PrivacyPolicyComponent},
  { path: "cookies", redirectTo: "coming-soon",component: CookiesComponent },
  { path: "login", redirectTo: "coming-soon", component:LoginComponent },
  { path: "dashboard", redirectTo: "coming-soon", component:DashboardComponent, children: [
    { path: "", redirectTo: "", pathMatch: "full"},
    { path: "post-maker", component:PostMakerComponent },
    { path: "tour-maker", component:TourMakerComponent },
    { path: "translate", component:TranslateComponent },
    { path: "guides", component:GuidesComponent },
    { path: "users", component:UsersComponent }
  ], canActivate: [AuthGuardService] },
  { path: "booking", redirectTo: "coming-soon", component:BookingComponent },
  { path: "faq", redirectTo: "coming-soon", component:FaqComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
