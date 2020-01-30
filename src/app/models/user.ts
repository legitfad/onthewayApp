export class User {

    photoURL: string;

    constructor(
        public name?: string,
        public email?: string,
        public password?: string
    ) { }

} 

export class UserData {
    constructor(
        public id: string,
        public ShopperEmail: string,
        public custName: string,
        public status: string,
        public mallName: string) {

    }
}

