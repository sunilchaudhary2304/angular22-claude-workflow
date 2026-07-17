import { Component, inject, OnInit } from '@angular/core';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { UserStore } from '../state/user.store';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DataTableComponent],
  template: `
    <section class="card shadow-sm border-0 rounded-4">
      <div class="card-body p-4">
        <div class="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
          <div>
            <h2 class="h4 mb-1">Team members</h2>
            <p class="text-muted mb-0">A SignalStore-powered view for browsing people and roles.</p>
          </div>
          <div class="d-flex flex-wrap gap-2 align-items-center">
            <span class="badge bg-primary-subtle text-primary-emphasis">{{ store.stats().total }} total</span>
            <span class="badge bg-success-subtle text-success-emphasis">{{ store.filteredUsers().length }} visible</span>
          </div>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-md-7">
            <label class="form-label small text-uppercase text-muted">Search</label>
            <input
              type="search"
              class="form-control"
              placeholder="Search by name, email, or role"
              [value]="store.searchTerm()"
              (input)="store.setSearchTerm($any($event.target).value)"
            />
          </div>
          <div class="col-md-5">
            <label class="form-label small text-uppercase text-muted">Role</label>
            <select class="form-select" [value]="store.selectedRole()" (change)="store.setSelectedRole($any($event.target).value)">
              <option value="all">All roles</option>
              @for (role of store.availableRoles(); track role) {
                <option [value]="role">{{ role }}</option>
              }
            </select>
          </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            @if (store.isLoading()) {
              <span class="text-muted">Loading team members…</span>
            } @else if (store.error()) {
              <span class="text-danger">{{ store.error() }}</span>
            } @else {
              <span class="text-muted">Showing the latest seeded team roster.</span>
            }
          </div>
          <button class="btn btn-outline-secondary btn-sm" (click)="store.resetFilters()">Reset</button>
        </div>

        @if (store.filteredUsers().length === 0) {
          <div class="border rounded-4 p-4 text-center text-muted bg-body-tertiary">
            No team members match the current filters.
          </div>
        } @else {
          <app-data-table [columns]="columns">
            @for (user of store.filteredUsers(); track user.id) {
              <tr>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
              </tr>
            }
          </app-data-table>
        }
      </div>
    </section>
  `,
})
export class UserListComponent implements OnInit {
  readonly store = inject(UserStore);

  readonly columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  ngOnInit(): void {
    this.store.loadUsers();
  }
}
