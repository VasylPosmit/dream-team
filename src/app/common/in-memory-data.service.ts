import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MEMBERS } from './mock-team';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = MEMBERS;
    return { members };
  }
}
