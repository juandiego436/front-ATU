import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-app',
  templateUrl: './operador-app.component.html',
  styleUrls: ['./operador-app.component.scss']
})
export class OperadorAppComponent {
  data: any[] = DATA;
  first = 0;
  date: Date;
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