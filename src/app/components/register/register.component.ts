import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { NgAuthService } from "../../services/ng-auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit   {
  userModal = new User();

  constructor(
    public ngAuthService: NgAuthService
  ) { }

  ngOnInit() { }
}
