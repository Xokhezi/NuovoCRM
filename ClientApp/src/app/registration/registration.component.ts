import { LinkService } from './../services/link.service';
import { RegistrationsService } from './../services/registrations.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  passwordRepeat:any;
  link:any;

  passwordsValid=true;

  registration = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password:"",
    position: "",
    adress: "",    
    country: "",
    leadId: 0    
  };

  step:any;
  isEditable=false;

  constructor(private linkService:LinkService,private service:RegistrationsService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.step=1;
    this.active.paramMap.subscribe(params => {
      this.link = params.get('link'); 
      console.log(this.link);     
    })
    let link=this.linkService.createLink("karel@test.com",10);
    console.log(link);
    let decode =this.linkService.decodeLink(link);
    console.log(decode);
  }
  toDetail()
  {
    if(this.passwordRepeat===this.registration.password)    
      this.step=2;
    else
      this.passwordsValid=false;    
  }
  register()
  {
    this.service.register(this.registration)
    .subscribe((r:any)=>{
      console.log(r);
      this.step=3;
    });

    
  }
}
