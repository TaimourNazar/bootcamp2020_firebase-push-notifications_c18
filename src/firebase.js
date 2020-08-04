import firebase from 'firebase';

const config={
    apiKey: "AIzaSyCZW4U224qYgjxd8kRa6x0AXcUobMbbyxg",
    authDomain: "pwa-msg-341e4.firebaseapp.com",
    databaseURL: "https://pwa-msg-341e4.firebaseio.com",
    projectId: "pwa-msg-341e4",
    storageBucket: "pwa-msg-341e4.appspot.com",
    messagingSenderId: "188946715350",
    appId: "1:188946715350:web:21785ea80b6686dc94ef77"
}

firebase.initializeApp(config);

export default firebase;