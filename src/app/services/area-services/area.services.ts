import { AreaModel } from "src/app/models/area.model";

export class AreaServices {

  allConfirmAreas: AreaModel[] = [
    new AreaModel('אזור העיר'),
    new AreaModel('גילה'),
    new AreaModel('בית הכרם'),
    new AreaModel('נווה שאנן'),
    new AreaModel('אבו טור'),
    new AreaModel('נחלאות'),
    new AreaModel('המושבה הגרמנית'),
    new AreaModel('קריית הממשלה'),
    new AreaModel('ארנונה'),
    new AreaModel('מלחה'),
    new AreaModel(''),
  ];

  getAllConfirmAreas() {
    return this.allConfirmAreas;
  }

}
