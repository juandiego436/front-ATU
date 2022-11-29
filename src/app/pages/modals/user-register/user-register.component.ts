import { Component } from '@angular/core';
import { Departamento, Distrito, Provincia } from '@interfaces/ubigeo.interface';
import { UbigeoService } from '@services/ubigeo.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  distritos: Distrito[];
  provincias: Provincia[];
  departamentos: Departamento[];

  selectedProvincia: Provincia;
  selectedDistrito: Provincia;
  selectedDepartamento: Departamento;

  constructor(
    private ubigeoService: UbigeoService
  ) {
    this.listDepartamentos();
  }

  private listDepartamentos() {
    this.ubigeoService
      .getListDepartamentos().subscribe((response) => this.departamentos = response);
  }

  public listProvincias(departamento: Departamento) {
    this.ubigeoService
      .getProvinciaByIdDepartamento(departamento.id).subscribe((response) => this.provincias = response);
  }

  public listDistritos(provincia: Provincia) {
    this.ubigeoService
      .getDistritoByIdProvincia(provincia.id).subscribe((response) => this.distritos = response);
  }
}
