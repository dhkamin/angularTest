import { Component, OnInit, Inject } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Http } from '@angular/http';
import { CategorisService } from 'src/app/categoris.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories;  
  constructor(private categorisService :CategorisService) {}

getAllcategorie(){
    // this.categorisService.getCategorie().subscribe((res)=>{
    // this.categories = res;
    // console.log("test");
    // console.log(this.categories);
    //});

   }
   ngOnInit() {
     console.log("ng ionit");
    this.getAllcategorie ();
  }

}
