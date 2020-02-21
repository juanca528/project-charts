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
          this.title = "Quejas por Especialista";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Especialista", "Cantidad"];
          this.options = {};
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
