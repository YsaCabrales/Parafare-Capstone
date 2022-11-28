import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'welcome-tour',
    loadChildren: () => import('./welcome-tour/welcome-tour.module').then( m => m.WelcomeTourPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'commuting-guide',
    loadChildren: () => import('./commuting-guide/commuting-guide.module').then( m => m.CommutingGuidePageModule)
  },
  {
    path: 'jeepney-guide',
    loadChildren: () => import('./jeepney-guide/jeepney-guide.module').then( m => m.JeepneyGuidePageModule)
  },
  {
    path: 'tricycle-guide',
    loadChildren: () => import('./tricycle-guide/tricycle-guide.module').then( m => m.TricycleGuidePageModule)
  },
  {
    path: 'bus-guide',
    loadChildren: () => import('./bus-guide/bus-guide.module').then( m => m.BusGuidePageModule)
  },
  {
    path: 'walk-guide',
    loadChildren: () => import('./walk-guide/walk-guide.module').then( m => m.WalkGuidePageModule)
  },
  {
    path: 'scam-guide',
    loadChildren: () => import('./scam-guide/scam-guide.module').then( m => m.ScamGuidePageModule)
  },
  {
    path: 'maps-apitest',
    loadChildren: () => import('./maps-apitest/maps-apitest.module').then( m => m.MapsAPItestPageModule)
  },
  {
    path: 'term-and-conditions',
    loadChildren: () => import('./term-and-conditions/term-and-conditions.module').then( m => m.TermAndConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'fareguide',
    loadChildren: () => import('./fareguide/fareguide.module').then( m => m.FareguidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
