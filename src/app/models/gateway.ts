import { PeripheralDevice } from "./PeripheralDevice";
import { User } from "./user";

export interface Gateway{
    serialNumber:string;
    human_ReadAble_Name:string;
    ipv4_Address:string;
    userId:number;
    
}