import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeripheralDevice } from '../models/PeripheralDevice';
import { DeviceService } from '../Services/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  device:PeripheralDevice|undefined;
  constructor(private route: ActivatedRoute,
    private deviceService: DeviceService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
    const uId = Number(this.route.snapshot.paramMap.get('UId'));
    this.deviceService.getDevice(uId)
    .subscribe(res => {
            console.log('RES DATA',res)
          this.device = res.data
          });

  }
  save(): void {
    if (this.device) {
      this.deviceService.updateDevice(this.device)
        .subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }

}
