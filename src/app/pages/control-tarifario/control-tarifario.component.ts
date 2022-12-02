import { Component } from '@angular/core';
import { ExportService } from '@helpers/export.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-control-tarifario',
  templateUrl: './control-tarifario.component.html',
  styleUrls: ['./control-tarifario.component.scss']
})
export class ControlTarifarioComponent {
  data: any[] = DATA;
  first = 0;
  date: Date;
  itemsDownload: MenuItem[];
  cols: any[] = [
    { field: 'Fecha', header: 'fecha' },
    { field: 'Monto', header: 'monto' },
    { field: 'Placa', header: 'placa' },
    { field: 'Empresa', header: 'fecha' },
    { field: 'Ruta', header: 'ruta' },
    { field: 'Ubicacion', header: 'ubicacion' },
    { field: 'Origen', header: 'origen' }
  ];
  exportColumns: any[];
  constructor(
    private _exportService: ExportService
  ) { }

  ngOnInit(): void {
    this.exportColumns = this.cols.map(( col ) => ({ header: col.field, dataKey: col.header }));

    this.listItemsDownload();
  }

  private listItemsDownload() {
    this.itemsDownload = [
      {
        label: 'Pdf',
        icon: 'pi pi-file-pdf',
        command: () => {
          this._exportService
            .exportPdf(this.exportColumns, this.data);
        }
      },
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => { }
      },
    ];
  }
}

const DATA = [
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
]