import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveImplements';
  EmployeeLists: any;
  EmployeeList=[{
    name:'Yamuna',
    empid :101,
    domain: "Java",
    Gender:'f' 
  },
  {
    name:"Ravi",
    empid :102,
    domain: "Dotnet",
    Gender:'m'
  }
]

}
