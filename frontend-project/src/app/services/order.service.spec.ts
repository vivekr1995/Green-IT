import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('OrdersService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
                BrowserModule,
                FormsModule,
                BrowserAnimationsModule,
                HttpClientModule,
                MatSnackBarModule,
                HttpClientTestingModule,
              ],
    });
    service = TestBed.inject(OrderService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should be created the service', () => {
    expect(service).toBeTruthy();
  });

  // Get Order data api check
  it('Should make a GET request to getOrders() and return all data', () => {
    let expectedResponse: any ={
      "success": true,
      "data": [],
      "code": 200
    };

    service.getOrders().subscribe((sampleResponse) => {
      expect(expectedResponse).toEqual(sampleResponse);
    });
    let url = environment.apiUrl;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  });

  // Add Order api check
  it('Should make a POST request with resource data to add new data by addOrder()', () => {
    let row: any = {
      id: '1',
      name: 'vivek',
      state: 'IN',
      zip: '560016',
      amount: '100.50',
      quantity: '100',
      item: 'IND12',
    };

    let expectedResponse: any ={
      "success": true,
      "data": true,
      "code": 200
    }
    service.addOrder(row).subscribe((sampleResponse) => {
      expect(expectedResponse).toBe(sampleResponse);
    });
    let url = environment.apiUrl;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  });

  // Update Order api check
  it('Should make a PATCH request with resource data for update data by updateOrder()', () => {
    let row: any = {
      id: '1',
      name: 'vivek',
      state: 'IN',
      zip: '560016',
      amount: '100.50',
      quantity: '100',
      item: 'IND12',
    };

    let expectedResponse: any ={
      "success": true,
      "data": true,
      "code": 200
    }
    service.updateOrder(row).subscribe((sampleResponse) => {
      expect(expectedResponse).toBe(sampleResponse);
    });
    let url = environment.apiUrl;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  });

  // Delete Order api check
  it('Should make a DELETE request with item id to delete row data by deleteOrder()', () => {
    const item_id = 1;
    let expectedResponse: any ={
      "success": true,
      "data": true,
      "code": 200
    }
    service.deleteOrder(item_id).subscribe((sampleResponse) => {
      expect(expectedResponse).toBe(sampleResponse);
    });
    let url = environment.apiUrl + item_id;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  });
});
