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
import { AppComponent } from './app.component';
import { OrderService } from 'src/app/services/order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('ngAfterViewInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    // Checking the retrieved data
    it('should get all the items from resetData', () => {
      const service = fixture.debugElement.injector.get(OrderService);
      
      let expectedResponse: any ={
        "success": true,
        "data": [],
        "code": 200
      };

      service.getOrders().subscribe((sampleResponse) => {
        expect(expectedResponse).toEqual(sampleResponse);
      });

    });
  });
});