import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../Services/gateway.service';
import { MessageService } from '../Services/message.service';
import { Gateway } from '../models/gateway';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  gateways:Gateway[]=[];


  constructor(private gatewayService: GatewayService,
              private _router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void { 
    this.getGateways();
  }  

  getGateways(): void {
    this.gatewayService.getGateways()
      .subscribe(res => {
        console.log('Gateways',res.data)
        this.gateways = res.data},
                  err => {
                    if(err instanceof HttpErrorResponse){
                      if(err.status ===401){
                        this._router.navigate(['/login'])
                      }
                    }
                  });
  }

  add(name: string, ip:string): void {
    name = name.trim();
    ip = ip.trim();
    if (!name || !ip) { return; }
    this.gatewayService.addGateway({ human_ReadAble_Name : name, ipv4_Address : ip })
      .subscribe(res => {
        console.log(res)
        if(res.success)
        this.gateways.push(res.data);
        else{
          
        }
      });
  }

  delete(gateway: Gateway): void {
    this.gateways = this.gateways.filter(h => h !== gateway);
    this.gatewayService.deleteGateway(gateway.serialNumber).subscribe();
  }

}