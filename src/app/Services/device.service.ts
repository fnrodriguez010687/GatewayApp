import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private deviceUrl = `http://localhost:5098/PeripheralDevice`;

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
 

  getDevices(){
    return this.http.get<any>(this.deviceUrl)
   }

  getDevice(uid: number){
    const url = `${this.deviceUrl}/${uid}`;
    console.log('URL', url)
    return this.http.get<any>(url)
    
  }

  addDevice(device:any){
    console.log('LOG addDevice', device)
    return this.http.post<any>(this.deviceUrl, device)
 }

  updateDevice(device:any){
    return this.http.put<any>(this.deviceUrl, device)
  }

  deleteDevice(uid: number): any {
    const url = `${this.deviceUrl}/${uid}`;
    return this.http.delete<any>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`GatewayService: ${message}`);
  }
}
