import { Component, OnInit, ErrorHandler } from '@angular/core';
import { DeliveryServices } from 'src/app/services/delivery-services/delivery.services';
import { DeliveryModel } from 'src/app/models/delivery.model';
import { AlertServices } from 'src/app/services/alert-services/alert.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertModel } from 'src/app/models/alert.model';
import { AreaModel } from 'src/app/models/area.model';
import { AreaServices } from 'src/app/services/area-services/area.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  allDeliveries: DeliveryModel[] = [
    new DeliveryModel('id', 'התקבל', '00:20:45', '19:30', '050-4454578', 'אברהם פררה'),
    new DeliveryModel('id', 'התקבל', '00:20:45', '19:30', '050-4454578', 'הרב ברלין'),
  ];
  allConfirmAreas: AreaModel[];
  alertsArray: AlertModel[];
  addDeliveryForm: FormGroup;
  constructor(
    private deliveryServices: DeliveryServices,
    private alertServices: AlertServices,
    private areaServices: AreaServices,
    ) { }

  ngOnInit() {
    this.deliveryServices.deliveriesUpdated.subscribe(
      (updatedDeliveries: DeliveryModel[]) => {
        this.allDeliveries = updatedDeliveries;
      },
      (error: ErrorHandler) => {

      },
      () => {
        this.alertServices.sendAlerts();
      }
      );
      this.addDeliveryForm = new FormGroup({
        'customerPhone': new FormControl(null, Validators.required),
        'customerStreet': new FormControl(null, Validators.required),
        'areaSelect': new FormControl(1, Validators.required),
        'importantMsg': new FormControl(null),
      });

      this.areaServices.getAllConfirmAreas();
  }

  onAddDelivery() {
    console.log(this.addDeliveryForm.get('areaSelect').value);
    if (this.addDeliveryForm.valid && this.addDeliveryForm.get('areaSelect').value != 1) {
      console.log('was sended successfuly!');
    } else {
      this.alertServices.addAlertMessage(new AlertModel('bg-danger', 'לא תקין נא למלאות את השדות חובה * בבקשה',
      'הטופס צורך במלוא הפרטים לפני שליחה אנא תפעלו לפי ההוראות תודה'));
      this.alertServices.sendAlerts();
    }
  }
}
