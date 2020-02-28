import { Component, OnInit } from "@angular/core";
import { CupoService } from "src/app/services/cupo.service";

@Component({
  selector: "app-venta-cupos-vendedor",
  templateUrl: "./venta-cupos-vendedor.component.html",
  styleUrls: ["./venta-cupos-vendedor.component.css"]
})
export class VentaCuposVendedorComponent implements OnInit {
  selectedMemberShipSeller;
  title = "";
  type = "PieChart";
  data =[];
  columnNames = ["Ciudad", "Cantidad afiliacione"];
  options = {};
  width = 700;
  height = 500;
  constructor(private api: CupoService) {
    this.selectedMemberShipSeller = {
      cod_vendedor: "",
      fecha_ini: "",
      fecha_fin: "",
      sede: ""
    };
  }

  getAllMemberShipBySeller = () => {
    this.api.getAllMemberShipBySeller(this.selectedMemberShipSeller).subscribe(
      data => {
        console.log(data.VENDEDORES);
        let item = Object.entries(data.VENDEDORES);
        this.title = "";
        this.type = "BarChart";
        this.data = item;
        this.columnNames = ["Vendedor", "Cant. Afil."];
        this.options = {};
        this.width = 700;
        this.height = 500;
      }, error => {
        console.log(error);
        
      }
    )
  }
  ngOnInit() {}
}
