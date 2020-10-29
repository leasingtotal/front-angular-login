import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor( private service: AuthService,
               private router: Router) { }


  logout(){
    this.service.logout();
    // this.router.navigateByUrl('/login');

  }

  ngOnInit(): void {
  }

}
