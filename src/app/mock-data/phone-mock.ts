import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PhoneData implements InMemoryDbService {
  createDb() {
    let phones = [
      { id: 1, phone: '18649718636' },
      { id: 2, phone: '18649718631' },
      { id: 3, phone: '18649718632' },
      { id: 4, phone: '18649718633' }
    ];
    return { phones };
  }
}
