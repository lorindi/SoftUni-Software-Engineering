import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();
  badCurly = 'bad-curly';
  isShowed = false;
  imgUrl =
    'https://images.unsplash.com/photo-1547407139-3c921a66005c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  ngOnInit() {
    console.log('Component Created!');
  }
  ngAfterViewInit() {
    // debugger
    console.log('After Init!');
  }
  ngOnDestroy() {
    // clean up of stull!
    console.log('On Destroy');
  }

  ngDoCheck() {
    if (this.isShowed === true) {
      console.log({ isShowed: this.isShowed });
    }
  }

  handleClickShowed() {
    console.log('Clicked!');
    this.isShowed = !this.isShowed;
    console.log(this.isShowed);
  }
  handleInput(usernameValue: string) {
    console.log('username', usernameValue);
  }
  handleInputLastName(lastNameInput: HTMLInputElement) {
    console.log('last name', lastNameInput, lastNameInput.value);
    console.log(this.colorValue);
    this.onTestOutput.emit(lastNameInput?.value || '')
  }
}
