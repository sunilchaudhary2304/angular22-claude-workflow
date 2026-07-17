import { Injectable, computed, inject, signal } from '@angular/core';
import { UserApiService, UserSummary } from '../services/user-api.service';

export interface UserState {
  users: UserSummary[];
  searchTerm: string;
  selectedRole: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  searchTerm: '',
  selectedRole: 'all',
  isLoading: false,
  error: null,
};

@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly userApi = inject(UserApiService);
  private readonly state = signal<UserState>(initialState);

  readonly users = computed(() => this.state().users);
  readonly searchTerm = computed(() => this.state().searchTerm);
  readonly selectedRole = computed(() => this.state().selectedRole);
  readonly isLoading = computed(() => this.state().isLoading);
  readonly error = computed(() => this.state().error);

  readonly filteredUsers = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const roleFilter = this.selectedRole();

    return this.users().filter((user: UserSummary) => {
      const matchesQuery =
        !query ||
        [user.name, user.email, user.role].some((value) => value.toLowerCase().includes(query));
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;

      return matchesQuery && matchesRole;
    });
  });

  readonly availableRoles = computed(() => {
    return Array.from(new Set(this.users().map((user: UserSummary) => user.role))).sort();
  });

  readonly stats = computed(() => {
    const total = this.users().length;
    const visible = this.filteredUsers().length;

    return {
      total,
      visible,
      roles: new Set(this.users().map((user: UserSummary) => user.role)).size,
    };
  });

  loadUsers(): void {
    this.state.update((current: UserState) => ({ ...current, isLoading: true, error: null }));

    try {
      const users = this.userApi.getUsers();
      this.state.update((current: UserState) => ({ ...current, users, isLoading: false, error: null }));
    } catch (error) {
      this.state.update((current: UserState) => ({
        ...current,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unable to load team members.',
      }));
    }
  }

  setSearchTerm(searchTerm: string): void {
    this.state.update((current: UserState) => ({ ...current, searchTerm }));
  }

  setSelectedRole(selectedRole: string): void {
    this.state.update((current: UserState) => ({ ...current, selectedRole }));
  }

  resetFilters(): void {
    this.state.update((current: UserState) => ({ ...current, searchTerm: '', selectedRole: 'all' }));
  }
}
