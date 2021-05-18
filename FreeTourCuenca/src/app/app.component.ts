import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FreeTourCuenca';

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  showMenuAndFooter() {
    if(this.router.url === "/login" || this.router.url === "/register" || this.router.url.includes("/dashboard")){
      return false
    }else return true
  }
}
