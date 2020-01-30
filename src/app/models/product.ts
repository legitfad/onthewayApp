export class products {
    
    name: string;
    pId: string;
    quantity: number;
    mallName: string;
    storeName: string;
    pStatus: string;
    image: string;

    constructor(
    name: string, 
    quantity: number,
    image: string)
    {
        this.name = name;
        this.quantity = quantity;
        this.image=image;
    }

}