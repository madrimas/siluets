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

        let userId = "1"; //TODO userId from Auth

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
        console.log(promisePresetsExercises);
        return promisePresetsExercises;
    },
    saveTraining(excerciseData) {
        var db = firebase.firestore();

        excerciseData.dateCompleted = new Date();
        excerciseData.userId = 1;
        excerciseData.parentPresetId = 1;

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
        preset.userId = "1"; //TODO user from Auth context
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

        //dispatch
    },
    setFavouritePresetValue(preset) {
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
        let preset = exerciseAndPreset.preset;
        let exercise = exerciseAndPreset.exercise;

        // exercise.exerciseId = 6
        // exercise.exerciseName = "dupa12345678"
        // exercise.defaultReps = 12
        // exercise.defaultSeries = 4
        // exercise.description = "Lifthing weight from the floor"
        // exercise.displayName = "Deadlift"
        // exercise.name = "deadlift"
        // exercise.setsDone = 0
        // exercise.userSeries = 0
        // exercise.muscleId = 1

        let exerciseToAdd = {
            exerciseId: exercise.exerciseId,
            exerciseName: exercise.exerciseName,
            defaultReps: exercise.defaultReps,
            defaultSeries: exercise.defaultSeries,
            description: exercise.description,
            displayName: exercise.displayName,
            name: exercise.name,
            muscleId: exercise.muscleId,
            setsDone: exercise.setsDone,
            userReps: [],
            userSeries: exercise.userSeries,
            weights: []
        }

        console.log(exerciseToAdd);

        var db = firebase.firestore();

        var presetToUpdate = db.collection("presets").doc(preset.presetId);
        // var presetToUpdate = db.collection("presets").doc("XjE5xgESsu5mzuTNwtmb");

        // Atomically add a new region to the "exercises" array field.
        presetToUpdate.update({
            exercises: firebase.firestore.FieldValue.arrayUnion(exerciseToAdd)
        });
    }

}

export default FirebaseService