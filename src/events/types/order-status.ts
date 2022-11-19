export enum OrderStatus {
  // when the order has been created, but the ticket is not reserved
  Created = 'created',
  // when the ticket the order is trying to reserve is already reserved
  // or when the user has canceled the order
  // or the order expires before payment
  Canceled = 'canceled',
  // when the order has succesfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // when the order has reserved the ticket and payment is successful
  Complete = 'complete'
}
