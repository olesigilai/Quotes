import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-chil',
  templateUrl: './quote-chil.component.html',
  styleUrls: ['./quote-chil.component.css']
})
export class QuoteChilComponent implements OnInit {
@Input() quote?:Quote;
@Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
