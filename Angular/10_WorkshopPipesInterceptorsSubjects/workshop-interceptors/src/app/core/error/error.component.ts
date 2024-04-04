import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMsg = '';
  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((err: any) => {
      this.errorMsg = err?.message || '';
    });
  }
}
