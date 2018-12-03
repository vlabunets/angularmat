import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) {
  }

  saveReport(data) {
    const url = 'http://test-rest-service/test-form';
    return this.http.post(url, {data});
  }
}
