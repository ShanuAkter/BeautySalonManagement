import { UserRegistration } from "./user-registration";

export interface Appointment {

    userId: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    coupon?: string;
    status: string;
}

