import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Gateway } from '../models/gateway';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  private gatewayUrl = `http://localhost:5098/Gateway`;

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
 

  getGateways(){
    return this.http.get<any>(this.gatewayUrl)
   }

  getGateway(serialNumber: string){
    const url = `${this.gatewayUrl}/${serialNumber}`;
    console.log('URL', url)
    return this.http.get<any>(url)
    
  }

  addGateway(gateway:any){
    return this.http.post<any>(this.gatewayUrl, gateway)
 }

  updateGateway(gateway:any){
    return this.http.put<any>(this.gatewayUrl, gateway)
  }

  deleteGateway(serialNumber: string): any {
    const url = `${this.gatewayUrl}/${serialNumber}`;
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
