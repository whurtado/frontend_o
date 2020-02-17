import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { OnlyLettersDirective } from './directives/only-letters.directive';


@NgModule({
  declarations: [
    OnlyNumbersDirective,
    OnlyLettersDirective,
  ],
  exports: [
    OnlyNumbersDirective,
    OnlyLettersDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
