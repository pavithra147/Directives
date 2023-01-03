import { Component, OnInit } from '@angular/core';
import { MathsService } from '../Services/maths.service';

@Component({
  selector: 'app-componentforservice',
  templateUrl: './componentforservice.component.html',
  styleUrls: ['./componentforservice.component.css']
})
export class ComponentforserviceComponent implements OnInit {

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {
  }
 
  Increase(){
    this._maths.addOne();
  }
}
