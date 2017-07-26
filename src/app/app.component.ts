import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import * as d3 from 'd3';


declare let d3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../../node_modules/nvd3/build/nv.d3.css'
  ]
})
export class AppComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  options;
  data;
  dataP; any;
  values = [];
  recData: Array<any>;
  xData = [];
  yData = [];
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private width: number = 1500;
  private height: number = 700;


  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(
      (res) => {
        this.recData = res.json()["data"];
        // console.log(this.data);
        for (var i = 0; i < this.recData.length; i++) {
          let obj = { "label": this.recData[i][0], "value": this.recData[i][1] };
          this.values.push(obj);
          this.xData.push(this.recData[i][0]);
          this.yData.push(this.recData[i][1]);
        }

        this.dataP = {
          labels: this.xData,
          datasets: [
            {
              label: 'GDP',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: this.yData
            }
          ]
        }
      }
    );
  }

  onData() {
    this.createChart();
  }

  ngOnInit() {
    // this.createChart();
  }

  createChart() {

    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: this.height,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 80
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },

        duration: 500,
        xAxis: {
          axisLabel: 'Year'
        },
        yAxis: {
          axisLabel: 'GDP',
          axisLabelDistance: -10
        }
      }
    }

    this.data = [
      {
        key: "GDP",
        values: this.values
      }
    ];

  }
}