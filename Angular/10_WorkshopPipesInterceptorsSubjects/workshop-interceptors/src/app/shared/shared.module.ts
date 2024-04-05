import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomMsgComponent } from './welcom-msg/welcom-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    WelcomMsgComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    WelcomMsgComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
})
export class SharedModule {}
