import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GatewayService } from '../Services/gateway.service';
import { Gateway } from '../models/gateway';
import { PeripheralDevice } from '../models/PeripheralDevice';
import { DeviceService } from '../Services/device.service';

@Component({
  selector: 'app-gateway-detail',
  templateUrl: './gateway-detail.component.html',
  styleUrls: ['./gateway-detail.component.css']
})
export class GatewayDetailComponent implements OnInit {
gateway:Gateway|undefined;
devices:PeripheralDevice[]=[];
ipregex ='(?:[0-9]{1,3}[.]){3}[0-9]{1,3}';
  constructor(
    private route: ActivatedRoute,
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGateway();
  }

  getGateway(): void {
    const serialnumber = String(this.route.snapshot.paramMap.get('SerialNumber'));
    this.gatewayService.getGateway(serialnumber)
    .subscribe(res => {
            console.log('RES DATA',res)
          this.gateway = res.data
          this.devices = res.data.devices});

  }

  delete(device: PeripheralDevice): void {
    this.devices = this.devices.filter(h => h !== device);
    this.deviceService.deleteDevice(device.uId).subscribe();
  }

  add(name: string, ip:string): void {
    name = name.trim();
    ip = ip.trim();
    if (!name || !ip) { return; }
    this.deviceService.addDevice({ Vendor : name, Status : ip, GatewayId: this.gateway?.serialNumber })
      .subscribe(res => {
        console.log(res)
        if(res.success)
        this.devices.push(res.data);
      });
    }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.gateway) {
      this.gatewayService.updateGateway(this.gateway)
        .subscribe(() => this.goBack());
    }
  }

}
