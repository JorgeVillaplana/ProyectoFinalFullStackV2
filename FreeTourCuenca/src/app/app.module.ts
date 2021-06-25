import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalComponent } from './legal/legal.component';
import { BookingComponent } from './booking/booking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesComponent } from './cookies/cookies.component';
import { MenuAsideComponent } from './dashboard/menu-aside/menu-aside.component';
import { PostMakerComponent } from './dashboard/post-maker/post-maker.component';
import { TourMakerComponent } from './dashboard/tour-maker/tour-maker.component';
import { TranslateComponent } from './dashboard/translate/translate.component';
import { MatIconModule } from '@angular/material/icon';
import { NotfoundComponent } from './notfound/notfound.component';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FaqComponent } from './faq/faq.component';
import { GuidesComponent } from './dashboard/guides/guides.component';
import { UsersComponent } from './dashboard/users/users.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { DatepickerComponent } from './dashboard/tour-maker/datepicker/datepicker.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ToursComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    LegalComponent,
    BookingComponent,
    PrivacyPolicyComponent,
    CookiesComponent,
    MenuAsideComponent,
    PostMakerComponent,
    TourMakerComponent,
    TranslateComponent,
    NotfoundComponent,
    FaqComponent,
    GuidesComponent,
    UsersComponent,
    AboutUsComponent,
    DatepickerComponent,
    ComingSoonComponent
   ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule,
    FroalaEditorModule,
    FroalaViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
