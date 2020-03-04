import { Component, OnInit } from "@angular/core";
import { CupoService } from "src/app/services/cupo.service";

@Component({
  selector: "app-venta-cupos-vendedor",
  templateUrl: "./venta-cupos-vendedor.component.html",
  styleUrls: ["./venta-cupos-vendedor.component.css"]
})
export class VentaCuposVendedorComponent implements OnInit {
  selectedMemberShipSeller;
  params = true;
  params1 = false;
  title = "";
  type = "PieChart";
  data = [];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {
    is3D: true
  };
  width = 700;
  height = 500;

  title1 = "";
  type1 = "BarChart";
  data1 = [];
  columnNames1 = ["Vendedor", "Cant. Afil."];
  options1 = {};

  width1 = 900;
  height1 = 500;

  title2 = "";
  type2 = "ScatterChart";
  data2 = [];
  columnNames2 = ["Vendedor", "Cant. Afil."];
  options2 = {};
  constructor(private api: CupoService) {
    this.selectedMemberShipSeller = {
      cod_vendedor: "",
      fecha_ini: "",
      fecha_fin: "",
      sede: ""
    };
  }

  comparations() {
    if (this.params === true) {
      this.params = false;
      this.params1 = true;
    }
    if (this.params === false) {
      this.params = true;
      this.params1 = false;
    }
  }

  getAllMemberShipBySeller = () => {
    this.api.getAllMemberShipBySeller(this.selectedMemberShipSeller).subscribe(
      data => {
        console.log(data.VENDEDORES);
        let item = Object.entries(data.VENDEDORES);
        let filt = item.splice(0, 9);
        this.title = "";
        this.type = "PieChart";
        this.data = filt;
        this.columnNames = ["Vendedor", "Cant. Afil."];
        this.options = {
          is3D: true
        };
        this.width = 700;
        this.height = 500;

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
        this.width1 = 1000;
        this.height1 = 500;

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
