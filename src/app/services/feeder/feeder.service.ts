import { Injectable } from '@angular/core';
import {Feeder} from "../../models/feeder/feeder";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeederService {
  private feeder: Feeder | undefined;
  constructor(private http: HttpClient) { }

  getFeeder(): Feeder | undefined {
    return this.feeder;
  }

  setFeeder(feeder: Feeder): void {
    this.feeder = feeder;
  }

  resetFeeder(): void {
    this.feeder = undefined;
  }

  getAllFeederList(): Promise<Feeder[]> {
    return this.http.get<Feeder[]>(`${environment.baseUrl}/api/feeder/get-all`).toPromise();
  }

  create(feeder: Feeder): Promise<Feeder> {
    feeder.id = 10;
    return this.http.post<Feeder>(`${environment.baseUrl}/api/feeder/create`, feeder).toPromise();
  }

  update(feeder: Feeder): Promise<Feeder> {
    return this.http.put<Feeder>(`${environment.baseUrl}/api/feeder/update`, feeder).toPromise();
  }

  delete(feeder: Feeder): Promise<Feeder> {
    return this.http.delete<Feeder>(`${environment.baseUrl}/api/feeder/delete/${feeder.id}`).toPromise();
  }

}
