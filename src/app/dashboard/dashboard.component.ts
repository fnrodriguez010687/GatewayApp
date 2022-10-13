import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../Services/gateway.service';
import { Gateway } from '../models/gateway';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gateways: Gateway[] = [];
  constructor(private gatewayService: GatewayService) { }

  ngOnInit(): void {
    this.getGateways();
  }

  getGateways(): void{
    this.gatewayService.getGateways()
    .subscribe(gateways => this.gateways = gateways.slice(1, 5));
  }

}
