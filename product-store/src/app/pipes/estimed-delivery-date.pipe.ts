import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'estimatedDeliveryDate'})
export class EstimatedDeliveryDatePipe implements PipeTransform {
  transform(value: Date, maxBusinessDaysToShip: number, shipOnWeekends:boolean): Date {
    var orderDate = new Date(value);
    if(shipOnWeekends)    {
      orderDate.setDate(orderDate.getDate() + maxBusinessDaysToShip);
      return orderDate;    
    }
    else{
      var dayCounter = 0;
      while(dayCounter < maxBusinessDaysToShip){
        orderDate.setDate(orderDate.getDate() + 1);
        if (orderDate.getDay() != 0 && orderDate.getDay() != 6) 
          dayCounter++
      }
      return orderDate;
    }
  }
}