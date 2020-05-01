import Vue from "vue";
import { firebaseConfig } from '@/config/firebase.config';

import * as firebase from 'firebase';
import 'firebase/firestore';

const FirebaseService = {
    init() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
            console.log('firebase init')
        } else {
            console.log('firebase already initialized')
        }
    },
    getExercises(setNo) {
        var db = firebase.firestore();

        let exercisesSet = [];

        if (setNo === 1) {
            db.collection("exercises").where('name', 'in', ['deadlift', 'bench-press', 'butterfly'])
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        exercisesSet.push(doc.data());
                    });
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        }
        else if (setNo === 2 || setNo === 3) {
            db.collection("exercises").where('name', 'in', ['liftdead', 'press-bench', 'flybutter'])
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        exercisesSet.push(doc.data());
                    });
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        }

        return exercisesSet;
    },
    saveTraining(excerciseData) {
        var db = firebase.firestore();

        excerciseData.userId = 1;
        excerciseData.dateCompleted = new Date();
        excerciseData.presetId = 1;

        console.log(excerciseData);

        db.collection("trainings").add({
            dateCompleted: excerciseData.dateCompleted,
            presetId: excerciseData.presetId,
            userId: excerciseData.userId,
            exercises: excerciseData.exercises
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });



        //dispatch
    },
    getPresets() {
        var db = firebase.firestore();

        let presetsArray = [];

        db.collection("presets")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    presetsArray.push(doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

        let promise = new Promise(function (resolve) { resolve(presetsArray) });
        return promise;
    },
    removePreset(preset){
        //todo
    }

}

export default FirebaseService