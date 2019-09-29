import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      // {
      //   path: "inventory",
      //   loadChildren: () =>
      //     import("app/inventory/inventory.module").then(m => m.InventoryModule)
      // },
    ]
  }
  // {
  //   path: "auth",
  //   loadChildren: () => import("app/auth/auth.module").then(m => m.AuthModule)
  // },
  // {
  //   path: "onboarding",
  //   loadChildren: () =>
  //     import("app/onboarding/onboarding.module").then(m => m.OnboardingModule)
  // }

  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
