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

        let presetsExercises = {
            parentPresetId: "",
            exercises: []
        };

        let userId = firebase.auth().currentUser.uid;

        db.collection('presets').where('userId', '==', userId).where('favouritePresetNo', '==', setNo)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    let preset = doc.data();
                    console.log(doc.id, " => ", preset);
                    presetsExercises.parentPresetId = preset.presetId;
                    presetsExercises.exercises = preset.exercises;
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

        let promisePresetsExercises = new Promise(function (resolve) { resolve(presetsExercises) });
        console.log("promisedObject: ");
        console.log(promisePresetsExercises);
        return promisePresetsExercises;
    },
    saveTraining(trainingData) {
        var db = firebase.firestore();

        trainingData.dateCompleted = new Date();
        trainingData.userId = firebase.auth().currentUser.uid;

        var newTrainingRef = db.collection("trainings").doc();

        newTrainingRef.set({
            trainingId: newTrainingRef.id,
            dateCompleted: trainingData.dateCompleted,
            presetId: trainingData.parentPresetId,
            userId: trainingData.userId,
            exercises: trainingData.exercises
        })
        .then(function() {
            console.log("Document written with ID: ", newTrainingRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
    removeExerciseFromPreset(exerciseAndPreset) {
        console.log(exerciseAndPreset);

        var db = firebase.firestore();

        let preset = exerciseAndPreset.preset;
        let exercise = exerciseAndPreset.exercise;

        // Atomically remove a region from the "exercises" array field.
        db.collection("presets").doc(preset.presetId).update({
            exercises: firebase.firestore.FieldValue.arrayRemove(exercise)
        });
    },
    removePreset(preset) {
        var db = firebase.firestore();

        db.collection("presets").doc(preset.presetId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    addPreset(preset) {
        var db = firebase.firestore();

        var newPresetRef = db.collection("presets").doc();

        preset.creationDate = new Date();
        preset.userId = firebase.auth().currentUser.uid;
        preset.presetId = newPresetRef.id;

        console.log(preset);

        newPresetRef.set({
            presetId: preset.presetId,
            userId: preset.userId,
            creationDate: preset.creationDate,
            presetName: preset.presetName,
            isFavouritePreset: preset.isFavouritePreset,
            favouritePresetNo: preset.favouritePresetNo,
            exercises : preset.exercises
        })
        .then(function() {
            console.log("Document written with ID: ", newPresetRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

        return preset
        //dispatch
    },
    updateFavouritePresetFlag(preset) {
        var db = firebase.firestore();

        if (preset.isFavouritePreset) {
            db.collection('presets').where('isFavouritePreset', '==', true).where('userId', '==', preset.userId)
                .get().then(snap => {
                    preset.favouritePresetNo = (snap.size + 1)
                    this.updateFavouritePresetValue(db, preset);
                });
        } else {
            preset.favouritePresetNo = 0;
            this.updateFavouritePresetValue(db, preset);
        }
    },
    updateFavouritePresetValue(db, preset) {
        let presetToUpdateRef = db.collection("presets").doc(preset.presetId);

        presetToUpdateRef.update({
            isFavouritePreset: preset.isFavouritePreset,
            favouritePresetNo: preset.favouritePresetNo
        })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    },
    addExerciseToPreset(exerciseAndPreset) {
        let presetId = exerciseAndPreset.presetId;
        let exercise = exerciseAndPreset.exercise;

        console.log(presetId + ' exercise', exercise)

        let exerciseToAdd = {
            exerciseId: exercise.id,
            exerciseName: exercise.name,
            description: exercise.description,

            muscleId: exercise.muscles[0],

            defaultReps: exercise.defaultReps != undefined ? exercises.defaultReps : 0,
            defaultSeries: exercise.defaultSeries != undefined ? exercises.defaultSeries : 0,
            setsDone: exercise.setsDone != undefined ? exercises.setsDone : 0,
            userReps: [],
            userSeries: exercise.userSeries != undefined ? exercises.userSeries : 0,
            weights: []
        }

        console.log(exerciseToAdd);

        var db = firebase.firestore();

        var presetToUpdate = db.collection("presets").doc(presetId);
        // var presetToUpdate = db.collection("presets").doc("XjE5xgESsu5mzuTNwtmb");

        // Atomically add a new region to the "exercises" array field.
        presetToUpdate.update({
            exercises: firebase.firestore.FieldValue.arrayUnion(exerciseToAdd)
        });
    },
    isUserLoggedIn() {
        return true;
        var user = firebase.auth().currentUser;

        if (user) {
            return true;
        } else {
            return false;
        }
    },
    login(loginData) {
        return firebase.auth()
            .signInWithEmailAndPassword(loginData.email, loginData.password)
    },
    register(registerData) {
        return firebase.auth()
            .createUserWithEmailAndPassword(registerData.email, registerData.password)
    },
    logout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            console.log("Logout error" + error);
          });
    },
    addMeasurement(measurement) {

        measurement.id = Math.random(10000)
        return measurement
    },
    fetchMeasurements() {
        return new Promise(function (resolve) { resolve([]) })
    }

}

export default FirebaseService