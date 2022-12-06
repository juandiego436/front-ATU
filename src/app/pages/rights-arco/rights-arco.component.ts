import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rights-arco',
  templateUrl: './rights-arco.component.html',
  styleUrls: ['./rights-arco.component.scss']
})
export class RightsArcoComponent implements OnInit {
  data = [
    {
      id: 1,
      question: '¿QUÉ SON LOS DERECHOS ARCO?',
      answer: 'Los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) te ' +
        'permiten obtener información sobre tus propios datos personales y el tratamiento que ' +
        'les damos: cuál es su origen, finalidad y de qué forma se están comunicando o compartiendo.\n',
    },
    {
      id: 2,
      question: '¿PARA QUÉ SIRVEN LOS DERECHOS ARCO?\n',
      options: [
        {
          id: 1,
          title: 'ACCESO',
          content: 'Te permite saber qué datos personales tenemos sobre ti, ' +
            'preguntar cómo los obtuvimos, para qué los utilizamos, con quién los ' +
            'hemos compartido y todos los detalles de su uso.\n'
        },
        {
          id: 2,
          title: 'RECTIFICACIÓN',
          content: 'Te permite modificar y actualizar tus datos personales, cuando estos sean erróneos, inexactos o incompletos.\n'
        },
        {
          id: 3,
          title: 'CANCELACIÓN',
          content: 'Te permite cancelar el uso de tus datos personales cuando la finalidad para la que los entregaste ha concluido, venció el plazo establecido para su ' +
            'tratamiento, o porque revocaste el consentimiento para su uso. ' +
            'Nota: existen excepciones para \n'
        },
        {
          id: 4,
          title: 'OPOSICIÓN',
          content: 'Te permite oponerte al uso de tus datos porque te están generando algún perjuicio en diversos ámbitos.\n'
        }
      ]
    },
    {
      id: 3,
      question: '¿CÓMO SOLICITAR LOS DERECHOS ARCO?',
      answer: 'Envíanos un correo electrónico a protecciondedatos@atu.gob.peadjuntado ' +
        'una solicitud de derechos ARCO (Descargar AQUÍ) debidamente llenado y firmado.\n' +
        '\n' +
        'De manera opcional, puedes adjuntar otros documentos que consideres necesarios para ejercer tu derecho. \n'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
