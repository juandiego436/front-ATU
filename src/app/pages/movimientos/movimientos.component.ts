import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
  data: any[] = DATA;
  first = 0;
  constructor() { }

  ngOnInit(): void {
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