import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninjaA', weapon: 'stars' },
    { id: 2, name: 'ninjaB', weapon: 'nunchucks' },
  ];
  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.find((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}
