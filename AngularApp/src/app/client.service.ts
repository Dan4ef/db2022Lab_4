import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  addClient(client:any){
    return this.http.post('http://localhost:3000/client/add-client', client);
  }
  listClient(){
    return this.http.get('http://localhost:3000/client/');
  }
  deleteClient(id:any){
    return this.http.delete('http://localhost:3000/client/del-client/'+id);
  }  
  singleClient(id:any){
    return this.http.get('http://localhost:3000/client/client/'+id);
  }

  updateClient(id:any, client:any){
    return this.http.put('http://localhost:3000/client/update-client/'+id, client);
  }
}
