import { Subject } from 'rxjs';
import { AlertModel } from 'src/app/models/alert.model';
import { slideTime } from '../animation-services/animations';

export class AlertServices {
  alertsArray: AlertModel[] = [];
  gotIncomeMsg = new Subject<AlertModel[]>();

  addAlertMessage(alert: AlertModel) {
    this.alertsArray.push(alert);
  }

  sendAlerts() {
      this.gotIncomeMsg.next(this.alertsArray);
  }

}

