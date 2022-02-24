import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-test-excel',
  templateUrl: './test-excel.component.html',
  styleUrls: ['./test-excel.component.css']
})
export class TestExcelComponent implements OnInit {
  info: any = [];

  constructor() { }

  ngOnInit(): void {
  }

   fileUpload(event: any) {

    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsBinaryString(selectedFile);
     fileReader.onload = async (event: any) => {
      if (event.target) {
        let binaryData = event.target.result;
        let workbook = XLSX.read(binaryData, { type: 'binary' });

        await workbook.SheetNames.forEach( sheet => {
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          this.info = data;
        })
        console.log(this.info);
        this.updateLab();
      }
    };

  }

  updateLab(): void {
    if (this.info) {
 // aca otra funcion asyn await para actualizar lab
      this.info.map((e: any) => {
        console.log(e);
      });
    }
  }

}
