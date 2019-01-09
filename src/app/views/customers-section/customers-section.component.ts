import { Component, OnInit } from '@angular/core';
import { slideDown, slideTime } from 'src/app/services/animation-services/animations';
import { AlertServices } from 'src/app/services/alert-services/alert.services';
import { AlertModel } from 'src/app/models/alert.model';

@Component({
  selector: 'app-customers-section',
  templateUrl: './customers-section.component.html',
  styleUrls: ['./customers-section.component.less'],
  animations: [
    slideDown
  ]
})
export class CustomersSectionComponent implements OnInit {
  closingTime: any = 60;
  autoClosingTimeAlert = false;
  alertsArray: AlertModel[];
  incomingAlert: AlertModel;
  showIncoming = false;
  constructor(private alertsServices: AlertServices) { }

  ngOnInit() {
   this.alertsServices.gotIncomeMsg.subscribe(
     (alerts: AlertModel[]) => {
        this.alertsArray = alerts;
        this.onNextMsg();
      }
      );
    }
    onNextMsg() {
      if (!this.showIncoming && this.alertsArray[0]) {
        this.incomingAlert = this.alertsArray[0];
        this.alertsArray.splice(0, 1);
        this.showIncoming = true;
        return;
      }
      if (this.showIncoming && this.alertsArray[0]) {
        this.showIncoming = false;
        setTimeout(() => {
          this.incomingAlert = this.alertsArray[0];
          this.alertsArray.splice(0, 1);
          this.showIncoming = true;
        }, slideTime);
        return;
      } else {
        console.log('je');
      this.showIncoming = false;
    }

    }
  }
