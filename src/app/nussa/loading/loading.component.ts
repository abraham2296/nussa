import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{
  
  constructor( private spinner: NgxSpinnerService){}

  

  ngOnInit(): void {

    //   this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 60000);

  }


  // openSpinner(){
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 10000);
   
  // }
}
 


  // if( this.productos.length === 25){
  //   this.spinner.hide();
  // }



  
    
