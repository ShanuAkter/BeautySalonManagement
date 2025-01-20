export class UserRegistration {
    firstName:string;
    lastName:string;
    age:number;
    email:string;
    password:string;
    confirmPassword:string;
    constructor(firstName:any, lastName:any,age:any, email:any,password:any,confirmPassword:any){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }
}
