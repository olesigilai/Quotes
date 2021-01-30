export class Quote {
    public showContent: boolean;
    constructor(public id: number, public name: string,public description: string, public completeDate: Date){
      this.showContent=false;
    }
  }
  