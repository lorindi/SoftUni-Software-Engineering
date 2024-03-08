import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data['user']);

    this.activatedRoute.params.subscribe((v) => {
      // const id = v['id'];

      // this.userService.getSingUser(id).subscribe((user) => {
      //   console.log(user);
      // });
    });
  }
}
