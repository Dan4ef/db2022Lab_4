import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  client:any;
  constructor(private clientservice:ClientService, private routes:Router) { }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.clientservice.listClient().subscribe((data:any)=>{
      this.client = data;

    })
  }

  delClient(datas:any){
    this.clientservice.deleteClient(datas._id).subscribe(data=>{
      console.log(datas);
      this.client = this.client.filter((u:any)=>u!==datas)
    })

  }
}
