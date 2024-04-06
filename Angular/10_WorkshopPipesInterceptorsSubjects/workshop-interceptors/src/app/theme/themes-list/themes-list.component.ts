import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      // TODO: not recommended to do it on front end!
      const sortDatesCB = (
        a: { created_at: string },
        b: { created_at: string }
      ) => (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
      const tempThemes = themes.sort(sortDatesCB as any).slice(0, 5);

      this.themes = tempThemes;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => {
      return s === this.userService.user?.id;
    });

    return !!isSubscribedUser;
  }
}
