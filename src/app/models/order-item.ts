export class orderItem {
  
    storeName:string;
    itemName:string;
    itemPrice: number;
    orderId: string;
    custId:string;
  
    constructor(
        custId: string, 
        orderId: string, 
        storeName: string, 
        itemName: string,
        itemPrice: number
    ) {
           this.custId = custId;
           this.orderId = orderId;
           this.storeName = storeName;
           this.itemName = itemName;
           this.itemPrice = itemPrice;
        }
  
  }