import { Component, OnInit } from "@angular/core";
import { CitaService } from "src/app/services/cita.service";

@Component({
  selector: "app-citas-especialista",
  templateUrl: "./citas-especialista.component.html",
  styleUrls: ["./citas-especialista.component.css"]
})
export class CitasEspecialistaComponent implements OnInit {
  selectedSpecialistAppointments;
  title = "Citas por especialista";
  type = "PieChart";
  data = [];
  columnNames = ["Especialista", "Cantidad"];
  options = {};
  width = 700;
  height = 500;
  constructor(private api: CitaService) {
    this.selectedSpecialistAppointments = {
      genero: "",
      estrato: "",
      edad: "",
      ingreso: "",
      fecha_ini: "",
      fecha_fin: ""
    };
  }

  getAllSpecialistAppointments = () => {
    this.api
      .getAllSpecialistAppointments(this.selectedSpecialistAppointments)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          this.title = "Citas por especialista";
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
