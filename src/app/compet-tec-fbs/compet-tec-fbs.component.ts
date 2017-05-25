import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compet-tec-fbs',
  templateUrl: './compet-tec-fbs.component.html',
  styleUrls: ['./compet-tec-fbs.component.css']
})
export class CompetTecFbsComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {

  }

public barChartOptions:any = {
  scale: {
      lineArc : false,
      angleLines: {
          color : '#fff' // linhas internas do radar.
      },
      gridLines: {
        color : '#fff' // linhas do radar.
      }
    }
  };

   // Radar
  public radarChartLabels:string[] = ['JAVA', 'C++', 'AngularJS', 'Angular 2', 'Hibernate', 'REST', 'JSON','Spring', 'HTML5','CSS','JS'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40, 0, 0, 0, 0], label: 'Habilidades'}
  ];

  
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}

