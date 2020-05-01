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
        console.log('dupa1')

        console.log(exerciseAndPreset);

        var db = firebase.firestore();

        let exercises = exerciseAndPreset.preset.exercises;

        db.collection("presets").where("presetId", "==", exerciseAndPreset.preset.presetId)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log('dupa2')
                    console.log(doc.id, " => ", doc.data());
                    // Build doc ref from doc.id
                    db.collection("presets").doc(doc.id).set({ exercises }, { merge: true });
                });
            })
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
    }

}

export default FirebaseService