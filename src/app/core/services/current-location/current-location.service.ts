import { Location } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CurrentLocationService {
  constructor(private location: Location) {}

  public getPath(): any {
    return this.location.path();
  }
}
