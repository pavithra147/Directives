import { Component, OnInit } from '@angular/core';
import { MathsService } from '../Services/maths.service';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  constructor(public _maths : MathsService) { }

  ngOnInit(): void {
  }

}
