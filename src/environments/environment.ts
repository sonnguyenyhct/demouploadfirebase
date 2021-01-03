// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig : {
      apiKey: 'AIzaSyBgejqM4LjZ111lJEk82Iilfl39v5LNmfM',
      authDomain: 'fir-upload-file-b16ec.firebaseapp.com',
      databaseURL: 'https://fir-upload-file-b16ec-default-rtdb.firebaseio.com/',
      projectId: 'fir-upload-file-b16ec',
      storageBucket: 'fir-upload-file-b16ec.appspot.com',
      messagingSenderId: '865067288230',
      appId: '1:865067288230:web:ddb152d7c7cf7ba8261667',
      measurementId: 'G-GZVS3Q3EJ8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
