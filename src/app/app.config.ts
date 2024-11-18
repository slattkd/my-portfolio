import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"dane-slatten","appId":"1:473391282199:web:e23b61668a3018e69cc452","storageBucket":"dane-slatten.firebasestorage.app","apiKey":"AIzaSyAv-qCPZ2aMFpZxY-CG5SodQ-1SFP5PejU","authDomain":"dane-slatten.firebaseapp.com","messagingSenderId":"473391282199","measurementId":"G-0SXJ3ZE204"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService,
  ]
};
