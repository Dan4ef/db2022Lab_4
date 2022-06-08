import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  addClient:any;
  id: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private clientservice:ClientService,
    private url:ActivatedRoute
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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.clientservice.singleClient(this.id).subscribe(data=>{
      this.addClient.patchValue(data);
    })
  }

  onSubmit(){
    console.log(this.addClient.value);
    this.clientservice.updateClient(this.id, this.addClient.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-client']);
    })
  }

}
