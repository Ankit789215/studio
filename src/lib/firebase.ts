'use client';
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  projectId: 'studio-2308251334-1e445',
  appId: '1:29115808988:web:19f5cf1792dbc578768819',
  apiKey: 'AIzaSyBtj-7YpnMRVgsa4JsowPNbsAfYCgPEMIY',
  authDomain: 'studio-2308251334-1e445.firebaseapp.com',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
