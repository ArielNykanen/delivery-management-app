import { Http, Response } from '@angular/http';
import { Injectable, ErrorHandler, OnDestroy } from '@angular/core';
import {  Subject, Subscription } from 'rxjs';
import { Options } from 'selenium-webdriver/ie';
import { AuthService } from '../services/auth-services/auth.services';

@Injectable()
export class DataStoreServices implements OnDestroy {
    constructor( private http: Http,
      private authServices: AuthService,
      ) {}

    storeCustomers(customer: Customer, tip) {
      const token =  this.authServices.getToken();
      this.tempCustomersDownloaded.subscribe(
        (dbCustomers: Customer[]) => {
          dbCustomers.push(customer);
          this.customerServices.setCustomers(dbCustomers);
          this.getSubscription = this.http.put(
            'https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token, dbCustomers).subscribe(
            (response: Response) => {
              // todo fix the some kind of subscription there!
          },
          (error: ErrorHandler) => {
            this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :( אנא נסה שנית תודה');
            this.ngOnDestroy();
          },
          () => {
            this.customerServices.addSuccessMsg('!הלקוח הועלה למאגר בהצלחה');
            this.publicMsgServices.setOnAddTipMessage(tip);
            this.ngOnDestroy();
          }
        );
      });
      this.fetchCurrnetCustomers();
    }

    fetchCurrnetCustomers() {
      const token =  this.authServices.getToken();
      this.subscription = this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
      subscribe(
        (response: Response) => {
            const customers: Customer[] = response.json();
            this.tempCustomersDownloaded.next(customers);
          },
      (error: ErrorHandler) => {
       this.customerServices.addErrorMsg('תקלה במערכת אנא רענן את הדף');
        this.customerServices.setNetWorkStatus(false);
      },
      () => this.subscription.unsubscribe()
      );
    }

    fetchCustomers() {
      const token =  this.authServices.getToken();
      return this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
      subscribe(
        (response: Response) => {
          const customers: Customer[] = response.json();
          this.customerServices.setCustomers(customers);
          this.customerServices.setNetWorkStatus(true);
          },
      (error: Error) => {
        this.customerServices.addErrorMsg('תקלה! :( ! אנא התחבר מחדש תודה');
        this.customerServices.setNetWorkStatus(false);
      });
    }

    updateCustomer(customerId: number, customer: Customer, tip: any) {
      this.userAlertServices.addSuccessMsg('...טוען');
      const token =  this.authServices.getToken();
      const updateCustomer = this.http.put(
        'https://jerusalem-runners.firebaseio.com/customers/'
        + customerId + '.json?auth=' + token, customer).subscribe(
        (response: Response) => {
          // todo fix the some kind of subscription there!
      },
      (error: ErrorHandler) => {
        this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :(');
        this.ngOnDestroy();
      },
      () => {
        this.customerServices.addSuccessMsg('הלקוח עודכן בהצלחה');
        setTimeout(() => {
          this.publicMsgServices.setOnAddTipMessage(tip);
          updateCustomer.unsubscribe();
        }, 300);
      }
    );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.getSubscription.unsubscribe();
      this.tempCustomersDownloaded.unsubscribe();
    }

}
