

export class Quote {
    public id?:string;
    public title: string;
    public author: string;

    constructor(params: Quote) {
        this.author = params.author;
        this.title = params.title;
    }
}