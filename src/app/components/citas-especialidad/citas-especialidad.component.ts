import { Component, OnInit } from "@angular/core";
import { CitaService } from "src/app/services/cita.service";

@Component({
  selector: "app-citas-especialidad",
  templateUrl: "./citas-especialidad.component.html",
  styleUrls: ["./citas-especialidad.component.css"]
})
export class CitasEspecialidadComponent implements OnInit {
  selectedAppointmentsBySpecialty;
  tipoConsulta;
  titleMain;
  title = "Afiliaciones por ciudades en un determinado año";
  type = "PieChart";
  data = [];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {};
  width = 700;
  height = 500;
  constructor(private api: CitaService) {
    this.selectedAppointmentsBySpecialty = {
      genero: "",
      estrato: "",
      edad: "",
      ingreso: "",
      fecha_ini: "",
      fecha_fin: ""
    };
  }

  store() {
    if (this.tipoConsulta == 1) {
      console.log(1);
      this.titleMain = "Citas por Especialidad";
    }
    if (this.tipoConsulta == 2) {
      console.log(2);
      this.titleMain = "Citas por Especialista";
    }
    if (this.tipoConsulta == 3) {
      console.log(3);
      this.titleMain = "Citas por Examen";
    }
    if (this.tipoConsulta == 4) {
      console.log(4);
      this.titleMain = "Otros servicios";
    }
    if (this.tipoConsulta == 5) {
      console.log(5);
      this.titleMain = "Citas por Institución";
    }
  }

  methodo() {
    if (this.tipoConsulta == 1) {
      this.getAllAppointmentsBySpecialty();
    }
    if (this.tipoConsulta == 2) {
      this.getAllSpecialistAppointments();
    }
    if (this.tipoConsulta == 3) {
      this.getAllExamAppointments();
    }
    if (this.tipoConsulta == 4) {
      this.getAllOtherService();
    }
    if (this.tipoConsulta == 5) {
     this.getAllInstitutionAppointments()
    }
  }

  getAllAppointmentsBySpecialty = () => {
    this.api
      .getAllAppointmentsBySpecialty(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          this.title = "Citas por especialidad";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Ciudad", "Cantidad afiliacione"];
          this.options = {};
          this.width = 700;
          this.height = 500;
        },
        error => {
          console.log(error);
        }
      );
  };

  getAllSpecialistAppointments = () => {
    this.api
      .getAllSpecialistAppointments(this.selectedAppointmentsBySpecialty)
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

  getAllExamAppointments = () => {
    this.api
      .getAllExamAppointments(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          this.title = "Citas por examen";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Examen", "Cantidad"];
          this.options = {};
          this.width = 700;
          this.height = 500;
        },
        error => {
          console.log(error);
        }
      );
  };

  getAllOtherService = () => {
    this.api.getAllOtherService(this.selectedAppointmentsBySpecialty).subscribe(
      data => {
        console.log(data);
        let items = Object.entries(data);
        this.title = "Otros Servicios";
        this.type = "PieChart";
        this.data = items;
        this.columnNames = ["Examen", "Cantidad"];
        this.options = {};
        this.width = 700;
        this.height = 500;
      },
      error => {
        console.log(error);
      }
    );
  };

  getAllInstitutionAppointments = () => {
    this.api
      .getAllInstitutionAppointments(this.selectedAppointmentsBySpecialty)
      .subscribe(
        data => {
          console.log(data);
          let items = Object.entries(data);
          this.title = "Citas por Institucion";
          this.type = "PieChart";
          this.data = items;
          this.columnNames = ["Institucion", "Cantidad"];
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
