export class AlertModel {
  constructor(public type: string, public header?: string, public msg?: string, public msgTime: Date = new Date()) {}
}
