import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testExcel';

  fileUpload(event: any): void {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      if (event.target) {
        let binaryData = event.target.result;
        let workbook = XLSX.read(binaryData, { type: 'binary' });

        workbook.SheetNames.forEach( sheet => {
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          console.log(data);
        })
        console.log(workbook);
      }
    };
  }

  // onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');

  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.srcResult = e.target.result;
  //       console.log(this.srcResult);
  //     };

  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  // }
}
