import { Component } from '@angular/core';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.scss']
})
export class GeneradorQrComponent {
  data: any[] = DATA;
  first = 0;
  cols: any[] = [
    { field: 'Empresa de Transporte', header: 'empresa' },
    { field: 'Ruc', header: 'ruc' },
    { field: 'Placa de registro', header: 'placa' },
    { field: 'Código de ruta', header: 'codRuta' },
    { field: 'Tipo de unidad', header: 'tipoUnidad' },
    { field: 'Número de asientos', header: 'numeroAsientos' }
  ];
  
  constructor() { }

  ngOnInit(): void {

  }

}

const DATA = [
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 },
  { empresa: "Software SOF", ruc: "102085640540", placa: "454SD", codRuta: "ASDS45SD", tipoUnidad: "Test", numeroAsientos: 10 }
]