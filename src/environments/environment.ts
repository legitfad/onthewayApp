// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBCmIrqrgt6Pzr9NZ7O3WQjeLt-dQkOq5Q",
        authDomain: "bipjapp.firebaseapp.com",
        databaseURL: "https://bipjapp.firebaseio.com",
        projectId: "bipjapp",
        storageBucket: "bipjapp.appspot.com",
        messagingSenderId: "635184489852",
        appId: "1:635184489852:web:b80e1f4e7a11d49cb130f9",
        measurementId: "G-7QL98X84CJ"
  },
  stripe_key: "pk_test_LECgGkevVQDOp6qbIiYGgwhN00OqLUojWu"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
