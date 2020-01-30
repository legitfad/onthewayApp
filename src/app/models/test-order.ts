export class orderTry {

    custName: string;
    status: string;
    mallName: string;
    orderId: string;
    Dropoff: string;
    custImage: string;
    

    constructor(
        custName: string,
        status: string,mallName: string,
        orderId: string,custImage: string,
        Dropoff: string
        ) {
           this.mallName = mallName;
           this.custName = custName;
           this.status = status;
           this.orderId = orderId;
           this.custImage = custImage;
           this.Dropoff = Dropoff;
         }
 
}