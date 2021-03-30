import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
    //this.addPropertyForm.controls['Name'].setValue('Default Vaue');
    setTimeout(() =>{
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    },1000);
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm){
    console.log('Congrats, from Submitted');
    console.log(this.addPropertyForm);
  }


}
