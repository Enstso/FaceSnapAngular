export class FaceSnap{
    title:string;
    description:string;
    date: Date;
    snaps: number;
    image: string;
    txtBtn:string;

    constructor(title:string,description:string,date:Date,snaps:number,image:string){
        this.title = title;
        this.description = description;
        this.date = date;
        this.snaps = snaps;
        this.image = image;
        this.txtBtn = "Dislike";
    }

    public onLike(){

        if(this.txtBtn==='Dislike'){
            this.txtBtn = 'Like';
            this.snaps--;
        }else{
            this.txtBtn='Dislike';
            this.snaps++;
        }
    }
}
