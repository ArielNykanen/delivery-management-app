export class DeliveryModel {
  constructor(
    private id: string,
    private status: string,
    private addedTime: string,
    private takeTime: string,
    private phone: string,
    private street: string,
  ) {}
}
