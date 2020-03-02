import { Component, OnInit } from "@angular/core";
import { QuejaService } from "src/app/services/queja.service";

@Component({
  selector: "app-queja-especialista",
  templateUrl: "./queja-especialista.component.html",
  styleUrls: ["./queja-especialista.component.css"]
})
export class QuejaEspecialistaComponent implements OnInit {
  selectedSpecialistComplain;
  specialists = [];
  title = "Quejas por Especialista";
  type = "PieChart";
  data = [];
  columnNames = ["Especialista", "Cantidad"];
  options = {};
  width = 700;
  height = 500;

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
  constructor(private api: QuejaService) {
    this.selectedSpecialistComplain = {
      institucion: "",
      calificacion: "",
      fecha_ini: "",
      fecha_fin: ""
    };
    this.getAllSpecialist();
  }

  getAllSpecialist = () => {
    this.api.getAllSpecialist().subscribe(
      data => {
        console.log(data);
        this.specialists = data
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllSpecialistComplain = () => {
    this.api
      .getAllSpecialistComplain(this.selectedSpecialistComplain)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          let filt = items.slice(0,10)
          this.title = "Quejas por Especialista";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Especialista", "Cantidad"];
          this.options = {};
          this.width = 700;
          this.height = 500;

          this.title1 = "";
          this.type1 = "ColumnChart";
          this.data1 = filt;
          this.columnNames1 = ["Ciudad", "Cant. Afil."];
          this.options1 = {};
          this.width = 900;
          this.height = 500;
  
          this.title2 = "";
          this.type2 = "ComboChart";
          this.data2 = filt;
          this.columnNames2 = ["Ciudad", "Cant. Afil."];
          this.options2 = {};
          this.width = 900;
          this.height = 500;
        },
        error => {
          console.log(error);
        }
      );
  };

  ngOnInit() {}
}
