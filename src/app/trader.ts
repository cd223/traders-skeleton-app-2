export class Trader {
    id: number;
    name: string;
    location: string;
    desk: string;

    constructor (i: number, n: string, l: string, d: string){
            this.id = i;
            this.name = n;
            this.location = l;
            this.desk = d;
    }

    toString(){
            return 'Trader(' + this.id + ', ' + this.name + ', ' + this.location + ', ' + this.desk + ')';
    }
}
