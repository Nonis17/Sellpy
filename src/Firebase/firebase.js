import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyBtEXyQ-uO7MF5GkjwvDFhi7V-VA2a4GaI",
    authDomain: "sellpy-9a7d5.firebaseapp.com",
    databaseURL: "https://sellpy-9a7d5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sellpy-9a7d5",
    storageBucket: "sellpy-9a7d5.appspot.com",
    messagingSenderId: "577554435531",
    appId: "1:577554435531:web:a74b25376ef3bf41ddfa4e"
};


class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.serverValue = firebase.database.ServerValue;

        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);


    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) => this.auth.onAuthStateChanged(authUser => {
        if (authUser) {

            //Leta upp user i authUser med unikt ID:
            this.user(authUser.uid)

                //Hämta informationen om användaren En gång: 
                .once('value')
                .then(snapshot => {
                    const dbUser = snapshot.val();

                    // merge auth and db user
                    authUser = {
                        uid: authUser.uid,
                        email: authUser.email,
                        ...dbUser,
                    };
                    next(authUser);
                });
        } else {
            fallback();
        }
    });

    database = () => this.db;

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    allBookings = () => this.db.ref('all-bookings');


    setCurrentUserBookingAmountOfPeople = (bookedWeekDayName, bookedDateFormat, bookedTime, people, dataBaseBookedDayId) => {
        this.db
            .ref(`users/${this.auth.currentUser.uid}/bookings`)
            .set({
                bookedWeekDayName: `${bookedWeekDayName}`,
                bookedDateFormat: `${bookedDateFormat}`,
                bookedTime: `${bookedTime}`,
                people: `${people}`,
                id: `${dataBaseBookedDayId}`,
                email: `${this.auth.currentUser.email}`
            })
    }

    setAmountOfPeople = (people, dataBaseBookedDayId) => {
        const addToRef = firebase.database().ref(`all-bookings/${dataBaseBookedDayId}/${this.auth.currentUser.uid}`);
        addToRef.update({
            people
        });
    }

    getCurrentUserBooking = (callback) => {
        if (this.auth.currentUser != null) {
            let ref = this.db.ref(`users/${this.auth.currentUser.uid}/bookings`);
            ref.on('value', snapshot => {
                if (snapshot.val() === null) {
                    callback({ bookedWeekDayName: "", bookedDateFormat: "", bookedTime: "", people: "" });
                } else {
                    callback(snapshot.val());
                }
            })
        }
    }

    populateBookingStatuses = (dateIDs, setBookingStatuses) => {
        const allBookingsRef = firebase.database().ref(`all-bookings`);
        allBookingsRef.on('value', snapshot => {
            if (snapshot.val() === null) {
                return;
            }
            let dates = snapshot.val();

            let result = {};
            for (const [date, bookings] of Object.entries(dates)) {

                if (dateIDs.includes(date)) {

                    let peopleCount = 0;
                    for (const [, bookingData] of Object.entries(bookings)) {
                        peopleCount += bookingData['people'];
                    }
                    result[date] = peopleCount;
                }
            }
            setBookingStatuses(result);
        })
    }

    deleteUserBooking = () => {
        if (this.auth.currentUser != null) {
            let ref = this.db.ref(`users/${this.auth.currentUser.uid}/bookings`);
            ref.once('value', snapshot => {
                if (snapshot.val() !== null) {
                    let bookingId = snapshot.val().id;
                    let allBookingsRef = this.db.ref(`all-bookings/${bookingId}/${this.auth.currentUser.uid}`);
                    allBookingsRef.remove();
                    ref.remove();
                }
            })
        }
    }

};

export default Firebase;

