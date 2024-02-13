import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: {name: string; age: number; lastName: boolean} [] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();
  
  // title = 'hide';
  // toggle = false;
  isActive = false;

  inputValue = 'Hello'

  ngOnInit(){
    console.log('navigation -> init');
    
  }
  ngAfterViewInit(){
    console.log('navigation -> After View Init');
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    
  }
 

  handleClick(event: Event, ...args: number[] ): void {
    console.log('clicked!');
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive)
    // this.toggle = !this.toggle;
    // console.log(this.toggle);
  }
}
