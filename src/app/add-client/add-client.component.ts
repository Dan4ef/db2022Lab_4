import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
 
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addClient:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private clientservice:ClientService
    ) {
      this.addClient = fb.group(
      {
        name:['', Validators.required],
        surname:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required],
      }

      )
     }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addClient.value);
    this.clientservice.addClient(this.addClient.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-client']);
    })
  }
}
