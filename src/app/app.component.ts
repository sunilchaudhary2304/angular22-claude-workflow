import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="min-vh-100 bg-light">
      <section class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="card shadow-sm border-0 rounded-4 overflow-hidden">
              <div class="card-body p-5">
                <div class="d-flex flex-wrap align-items-center gap-2 mb-4">
                  <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2">Angular 22</span>
                  <span class="badge bg-success-subtle text-success-emphasis rounded-pill px-3 py-2">SignalStore</span>
                  <span class="badge bg-info-subtle text-info-emphasis rounded-pill px-3 py-2">Bootstrap 5</span>
                </div>
                <div class="row g-4 align-items-center mb-4">
                  <div class="col-lg-8">
                    <h1 class="display-6 fw-bold mb-3">A richer Angular 22 starter with NgRx SignalStore</h1>
                    <p class="lead text-muted mb-0">
                      This scaffold now includes a feature-first users experience with state, filtering, and a reusable data table component.
                    </p>
                  </div>
                  <div class="col-lg-4">
                    <div class="border rounded-4 p-3 bg-body-tertiary">
                      <p class="small text-uppercase text-muted mb-2">Starter highlights</p>
                      <ul class="ps-3 mb-0 small text-muted">
                        <li>Standalone Angular components</li>
                        <li>SignalStore-backed user feature</li>
                        <li>Reusable shared table component</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <router-outlet></router-outlet>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class AppComponent {}
