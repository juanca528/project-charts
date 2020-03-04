import { Component, OnInit } from "@angular/core";
import { SolicitudService } from "src/app/services/solicitud.service";

@Component({
  selector: "app-solicitud",
  templateUrl: "./solicitud.component.html",
  styleUrls: ["./solicitud.component.css"]
})
export class SolicitudComponent implements OnInit {
  selectedServiceRequest;
  cities = [];
  title = "Consultas por solicitud de servicios";
  type = "PieChart";
  data = [];
  columnNames = ["Tipo", "Cantidad "];
  options = {
    is3D: true
  };
  width = 1000;
  height = 1000;

  title1 = "";
  type1 = "BarChart";
  data1 = [];
  columnNames1 = ["Vendedor", "Cant. Afil."];
  options1 = {};
  title2 = "";
  type2 = "ScatterChart";
  data2 = [];
  columnNames2 = ["Vendedor", "Cant. Afil."];
  options2 = {};
  constructor(private api: SolicitudService) {
    this.selectedServiceRequest = {
      ciudad: "",
      tipo_servicio: "",
      fecha_ini: "",
      fecha_fin: ""
    };
    this.getAllCities();
  }

  getAllCities = () => {
    this.api.getAllCities().subscribe(
      data => {
        console.log(data);
        this.cities = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllServiceRequest = () => {
    this.api.getAllServiceRequest(this.selectedServiceRequest).subscribe(
      data => {
        console.log(data);
        let items = Object.entries(data);
        let filt = items.slice(0, 10);
        this.title = "Consultas por solicitud de servicios";
        this.type = "PieChart";
        this.data = filt;
        this.columnNames = ["Tipo", "Cantidad"];
        this.options = {
          is3D: true
        };

        this.title1 = "";
        this.type1 = "ColumnChart";
        this.data1 = filt;
        this.columnNames1 = ["Ciudad", "Cant. Afil."];
        this.options1 = {
          vAxis: {
            minValue: 0,
            maxValue: 100,
            format: "#'%'",
            direction: 1
          },

          hAxis: {
            maxTextLines: 10,
            textStyle: {
              fontSize: 8
            }
          }
        };

        this.title2 = "";
        this.type2 = "ComboChart";
        this.data2 = filt;
        this.columnNames2 = ["Ciudad", "Cant. Afil."];
        this.options2 = {
          vAxis: {
            minValue: 0,
            maxValue: 100,
            format: "#'%'",
            direction: 1
          },

          hAxis: {
            maxTextLines: 10,
            textStyle: {
              fontSize: 8
            }
          }
        };
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}
