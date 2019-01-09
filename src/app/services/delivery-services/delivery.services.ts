import { DeliveryModel } from 'src/app/models/delivery.model';
import { Subject } from 'rxjs';

export class DeliveryServices {
  deliveriesUpdated = new Subject<DeliveryModel[]>();
  allDeliveries: DeliveryModel[];
  constructor() {}

  getAllDeliveries() {
    return this.allDeliveries;
  }

  setAllDeliveries(updatedDeliveries: DeliveryModel[]) {
    this.allDeliveries = updatedDeliveries;

  }

}
