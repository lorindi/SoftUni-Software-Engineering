import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateState } from './translate.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent {
  msg$: Observable<string>;

  constructor(private store: Store<TranslateState>) {
    this.msg$ = this.store.select('message');
  }

  bgMessage() {
    this.store.dispatch({ type: 'BG' });
  }

  itMessage() {
    this.store.dispatch({ type: 'IT' });
  }

  enMessage() {
    this.store.dispatch({ type: 'EN' });
  }
}
