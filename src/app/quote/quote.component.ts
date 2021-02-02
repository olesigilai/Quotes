import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes: Quote[] = [
    new Quote(0, "Life is not a straight line, treat everyone equally.", "Akoko", "Gideon", new Date(2021, 1, 1), 0, 0),
    new Quote(1, "Live a life of your own, never trust other people's ways.", "Balotelli", "Kiplagat", new Date(2021, 0, 1), 0, 0),
    new Quote(2, "Train yourself to be satisfied with what you have. Otherwise,You will die young.", "The Chariot Boy", "Bad Boy", new Date(2021, 1, 1), 0, 0),
    new Quote(3, "Train you child of the right way to go  and he won't forget this old age .", "Generali Kwack", "Jacky Daniels", new Date(2021, 1, 1), 0, 0),

  ];

  toggleDetails(index:any){
    this.Quotes[index].showDetails = !this.Quotes[index].showDetails;
  }
  isComplete = true;
  upvotes = 0;
  downvotes = 0;
  bestVotes = 0;
  bestAuthor?: string;
  bestQuote?: string;
  bestUser?: string;
  lowVotes?: number;
  date: any;


  newQuote(quote:any) {
    quote.name = quote.name;
    quote.quote = quote.quote;
    quote.author = quote.author;
    quote.date = new Date(quote.date)
    this.Quotes.unshift(quote)
  }
  upVote(quote:any) {
    quote.upvotes = quote.upvotes + 1;

  }
  downVote(quote:any) {
    quote.downvotes = quote.downvotes + 1;

  }

  deleteQuote(isComplete: any, index:any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].quote}?`)

      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }

  bestQuotes() {
    for (let i = 0; i < this.Quotes.length; i++) {
      if (this.Quotes[i].upvotes > this.bestVotes) {
        this.bestVotes = this.Quotes[i].upvotes;
        this.bestAuthor = this.Quotes[i].author;
        this.bestQuote = this.Quotes[i].quote;
        this.bestUser = this.Quotes[i].user;
        this.lowVotes = this.Quotes[i].downvotes;
        this.date = this.Quotes[i].completeDate;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}