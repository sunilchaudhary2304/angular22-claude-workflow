import { Injectable } from '@angular/core';

export interface UserSummary {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class UserApiService {
  getUsers(): UserSummary[] {
    return [
      { id: 1, name: 'Ava Chen', email: 'ava@example.com', role: 'Product Lead' },
      { id: 2, name: 'Noah Patel', email: 'noah@example.com', role: 'Frontend Engineer' },
      { id: 3, name: 'Mina Alvarez', email: 'mina@example.com', role: 'Design Lead' },
    ];
  }
}
