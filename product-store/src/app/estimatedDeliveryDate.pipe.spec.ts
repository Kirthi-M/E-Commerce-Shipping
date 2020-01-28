import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EstimatedDeliveryDatePipe } from './pipes/estimed-delivery-date.pipe';

fdescribe('Pipe: EstimatedDeliveryDate', () => {
  let pipe: EstimatedDeliveryDatePipe;

  beforeEach(() => {
      pipe = new EstimatedDeliveryDatePipe();
  });
  
  it('shipOnWeekends true includes weekend days', () => {
    console.log(pipe.transform(new Date('2020-01-24'), 2, true));
      expect(pipe.transform(new Date('2020-01-24'), 2, true)).toEqual(new Date('Sat Jan 25 2020 18:00:00 GMT-0600 (Central Standard Time)'));
  });

  it('shipOnWeekends false excludes weekend days', () => {
    expect(pipe.transform(new Date('2020-01-24'), 2, false)).toEqual(new Date('Mon Jan 27 2020 18:00:00 GMT-0600 (Central Standard Time)'));
  });
});