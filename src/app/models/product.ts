export class Product {
 
    name: string;    
    price: number;    
    image: string;
    category: string;    
    id: string;

    constructor(
        name: string, 
        price: number, 
        image: string,
        category?: string, 
        id?:string
        ){        
            this.name = name;        
            this.price = price;        
            this.image = image;    
            this.category = category;        
            this.id = id;
 
              // Add an image placeholder if there's no image        
              if (this.image === undefined) {            
                  switch (this.category) {                
                    case 'Main':                    
                      this.image = 'assets/image/main.png';
                        break;                
                    case 'Beverage': 
                        this.image = 'assets/image/beverage.png';                    
                        break;                
                    case 'Snack':                    
                        this.image = 'assets/image/snack.png';
                         break;       
                    case 'Household':                    
                        this.image = 'assets/image/householditem.png';
                         break;                
                    default:
                        this.image = 'assets/icon/icon.png';            
                    }        
                }    
            } 
}

export class ProductReview {

    comment: string;
    image: string;    
    imageFile: File;
    rating: string;
    custEmail:string;
    id: string;

    constructor(
        comment: string, 
        image: string,
        rating?: string,
        custEmail?:string, 
        id?: string
    ) {
        this.comment = comment;
        this.image = image;
        this.rating = rating;
        this.id = id;
        this.custEmail=custEmail;

     }
}