import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-chil',
  templateUrl: './quote-chil.component.html',
  styleUrls: ['./quote-chil.component.css']
})
export class QuoteChilComponent implements OnInit {
@Input() quote?:Quote;
@Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
