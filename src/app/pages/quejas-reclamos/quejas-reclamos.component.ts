import { Component } from '@angular/core';

@Component({
  selector: 'app-quejas-reclamos',
  templateUrl: './quejas-reclamos.component.html',
  styleUrls: ['./quejas-reclamos.component.scss']
})
export class QuejasReclamosComponent {
  motivoQueja: any[] = [
    {label: "Reclamos"},
    {label: "Observación"},
    {label: "Otro"}
  ];
  selectedMotivo: any;
}
