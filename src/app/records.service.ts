import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Tylor", 'E335', 'at@ytuyt.net']
  info2: string[] = ["Kgotso Phela", 'E355', 'kp@ytuyt.net']
  info3: string[] = ["Issa Kalonji", 'E375', 'ik@ytuyt.net']

  getinfo1(): string[]{
    return this.info1
  }

  getinfo2(): string[]{
    return this.info2
  }

  getinfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
