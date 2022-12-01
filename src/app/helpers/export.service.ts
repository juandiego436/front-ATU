import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  public exportPdf(columns:any[], data: any[]) {
    const doc = new jsPDF()
    autoTable(doc, { columns, body: data });
    doc.save('table.pdf');
  }
}
