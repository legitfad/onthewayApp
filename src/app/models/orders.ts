export class orders {
    id: string;
    oDate: Date;
    mallName: string;
    items: number;
    custName: string;
    orderStatus: string;
    custImage: string;
    storeName: string; 
    itemName: string;
    itemPrice: number;
    custId: string;

    constructor(
        custName:string, 
        mallName: string,
         items:number, 
         orderStatus: string,
         custImage:string,
         id:string,
         storeName: string, 
         itemName: string, 
         itemPrice: number, 
         custId: string)
         {
            this.mallName = mallName;
            this.items = items;
            this.custName = custName;
            this.orderStatus = orderStatus;
            this.custImage = custImage;
            this.id = id;
            this.storeName = storeName;
            this.itemName = itemName;
            this.itemPrice = itemPrice;
            this.custId = custId;

            if(this.custImage === undefined){
                this.custImage = 'assets/profile.jpg';
            }
    }


}