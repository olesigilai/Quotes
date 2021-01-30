import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-chil',
  templateUrl: './quote-chil.component.html',
  styleUrls: ['./quote-chil.component.css']
})
export class QuoteChilComponent implements OnInit {
@Input() quote?:Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
