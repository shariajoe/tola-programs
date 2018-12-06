import { NativeDateAdapter } from '@angular/material';
 
export class DateFormat extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
         const day = date.getDate();
         const month = date.getMonth() + 1;
         const year = date.getFullYear();
         // Return the format as per your requirement
         return this._to2digit(day) + '.' + this._to2digit(month) + '.' + year;
      } else {
        return date.toDateString();
      }
   }

   private _to2digit(n: number) {
      return ('00' + n).slice(-2);
   } 
}