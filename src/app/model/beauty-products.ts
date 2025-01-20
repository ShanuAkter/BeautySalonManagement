export class BeautyProducts {

    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;

    constructor(id: number, name: string,  description: string,  price: number,  stock: number, imgUrl: string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.stock=stock;
        this.imgUrl=imgUrl;
    }
}
