// import { Injectable } from '@angular/core';
// import { google } from 'googleapis';
// import { OAuth2Client, Credentials } from 'google-auth-library';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//     providedIn: 'root'
//   })
//   export class AndroidManagementService {


//     private _url2: string = "https://pokeapi.co/api/v2/pokemon";

    

//     private cloud_project_id = 'clark-amapi-test'
//     private CLIENT_CONFIG = {
//         'web': {
//             'client_id':'882252295571-m8qpit609pj2hsql4j5k0bue1injrtd2.apps.googleusercontent.com',
//             'client_secret':'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',
//             'auth_uri':'https://accounts.google.com/o/oauth2/auth',
//             'token_uri':'https://oauth2.googleapis.com/token',
//             'auth_provider_x509_cert_url':'https://www.googleapis.com/oauth2/v1/certs'
//           }
//     };
//     private SCOPES = ['https://www.googleapis.com/auth/androidmanagement'];
//     private CALLBACK_URL = 'https://google.github.io/android-management-api-samples/oauth_callback.html';
//     private androidManagement: any;
  
//     constructor() {
//       this.initializeApiClient();
//     }
  
//     private initializeApiClient() {
//       const auth = new google.auth.OAuth2;
//       auth.setCredentials(this.getSavedCredentials());
//       this.androidManagement = google.androidmanagement({ version: 'v1', auth });
//     }
  
//     // private getSavedCredentials(): Credentials {
//     //   // Implement a method to retrieve the saved credentials (e.g., from local storage)
//     //   // and return them as Credentials object.
//     //   // If no credentials are found, return null.
//     // }
  
//     // private saveCredentials(credentials: Credentials) {
//     //   // Implement a method to save the credentials (e.g., to local storage).
//     // }
  
//     public async authenticate(): Promise<boolean> {
//       const authUrl = this.getAuthorizationUrl();
//       window.location.href = authUrl;
//       return true; // Return true to indicate that authentication is in progress.
//     }
  
//     private getAuthorizationUrl(): string {
//       const auth = new google.auth.OAuth2(this.CLIENT_CONFIG.web.client_id);
//       auth.redirectUri = this.CALLBACK_URL;
//       const authUrl = auth.generateAuthUrl({
//         access_type: 'offline',
//         scope: this.SCOPES,
//       });
//       return authUrl;
//     }
  
//     public async handleAuthorizationCallback(authorizationCode: string): Promise<boolean> {
//       const auth = new google.auth.OAuth2Client(this.CLIENT_CONFIG.web.client_id);
//       auth.redirectUri = this.CALLBACK_URL;
//       const { tokens } = await auth.getToken(authorizationCode);
//       auth.setCredentials(tokens);
//       this.saveCredentials(tokens);
//       this.initializeApiClient();
//       return true; // Return true to indicate successful authentication.
//     }
  
//     // Use this.androidManagement to make API calls for managing Android devices
//     // e.g., this.androidManagement.enterprises...
//   }
  
  