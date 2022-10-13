import { Gateway } from "./gateway";

export interface PeripheralDevice{
      uId:number;
      vendor:string;
      dateCreated:Date;
      gatewayId:string;
      status:string;
}