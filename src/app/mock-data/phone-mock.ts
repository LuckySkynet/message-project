import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PhoneData implements InMemoryDbService {
  createDb() {
    let phones = [
      { id: 1, phone: '18649718636', location: '北京', operator: '联通' },
      { id: 2, phone: '18649718631', location: '广东', operator: '电信' },
      { id: 3, phone: '18649718632', location: '上海', operator: '联通' },
      { id: 4, phone: '18649718633', location: '福建', operator: '移动' }
    ];
    return { phones };
  }
}
