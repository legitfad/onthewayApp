export class orderItemTry {
  
    storeName:string;
    itemName:string;
    itemPrice: number;
    orderId: string;
    custId:string;
    quantity: number;
    itemImage: string;
    totalPrice: number;
    dropoff: string

    constructor(
        storeName: string, itemName: string,
        itemPrice: number,itemImage: string, 
        quantity: number, dropoff: string
         ) {
        
           this.storeName = storeName;
           this.itemName = itemName;
           this.itemPrice = itemPrice;
           this.quantity = quantity;
           this.itemImage = itemImage;
           this.dropoff = dropoff;
         }
 
}