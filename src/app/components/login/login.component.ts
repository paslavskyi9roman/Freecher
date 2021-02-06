import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { NgAuthService } from "../../services/ng-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModal = new User();

  constructor(
    public ngAuthService: NgAuthService
  ) { }

  ngOnInit() { }

}
