const firebaseConfig = {
    apiKey: "AIzaSyAP8aBBgjPQc4Sr8jUdoEsBn4nloyl8-Dk",
    authDomain: "kimyulportfolio.firebaseapp.com",
    projectId: "kimyulportfolio",
    storageBucket: "kimyulportfolio.firebasestorage.app",
    messagingSenderId: "154479308443",
    appId: "1:154479308443:web:c9353cb308a11b82b8603e"
};

// Firebase 초기화 추가
firebase.initializeApp(firebaseConfig);

// Google 제공자 객체 생성
const provider = new firebase.auth.GoogleAuthProvider();

// 로그인 기능
firebase.auth().signInWithRedirect(provider);