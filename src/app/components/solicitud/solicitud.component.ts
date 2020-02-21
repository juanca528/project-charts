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
  width = 700;
  height = 500;
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
        this.title = "Consultas por solicitud de servicios";
        this.type = "PieChart";
        this.data = items;
        this.columnNames = ["Tipo", "Cantidad"];
        this.options = {
          is3D: true
        };
        this.width = 700;
        this.height = 500;
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}
