import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableDataComponent } from './table-data.component';
import { OrderService } from 'src/app/services/order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableDataComponent', () => {
  let component: TableDataComponent;
  let fixture: ComponentFixture<TableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                BrowserModule,
                FormsModule,
                BrowserAnimationsModule,
                MatTableModule,
                MatInputModule,
                MatButtonModule,
                MatCheckboxModule,
                MatDialogModule,
                HttpClientModule,
                MatSnackBarModule,
                MatSortModule,
                MatIconModule,
                MatCardModule,
                MatPaginatorModule,
                MatTooltipModule,
                HttpClientTestingModule,
              ],
      declarations: [TableDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableDataComponent);
    component = fixture.componentInstance;
  });

  describe('ngAfterViewInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    // Data add check
    it('should add new data from editRow', () => {
      const service = fixture.debugElement.injector.get(OrderService);
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
        expect(expectedResponse).toEqual(sampleResponse);
      });
    });

    // Data edit check
    it('should update one data item from editRow', () => {
      const service = fixture.debugElement.injector.get(OrderService);
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
        expect(expectedResponse).toEqual(sampleResponse);
      });
    });
  });
});
