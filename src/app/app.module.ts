import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { AteCountPipe } from './ate-count.pipe';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    AteCountPipe,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
     BrowserModule,
     FormsModule
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
