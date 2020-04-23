import Vue from "vue";
import { firebaseConfig } from '@/config/firebase.config';

import * as firebase from "firebase/app";

const FirebaseService = {
    init() {
        firebase.initializeApp(firebaseConfig)
    },
    getExercises(setNo) {
        if (setNo === 1)
            return [
                {
                    id: 'dl1',
                    name: "deadlift",
                    displayName: "Deadlift",
                    description: "Lifthing weight from the floor",
                    defaultSeries: 4,
                    setsDone: 0,
                    defaultReps: 12,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                },
                {
                    id: 'bp1',
                    name: "bench-press",
                    displayName: "Bench press",
                    description: "Pushing bar when lying on the bench",
                    defaultSeries: 3,
                    defaultReps: 10,
                    setsDone: 0,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                }
                , {
                    id: 'bf1',
                    name: "butterfly",
                    displayName: "Butterfly",
                    description: "Chest exercise",
                    defaultSeries: 5,
                    defaultReps: 8,
                    setsDone: 0,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                }
            ]
        else if (setNo === 2 || setNo === 3)
            return [
                {
                    id: 'ld1',
                    name: "liftdead",
                    displayName: "Liftdead",
                    description: "Lifthing weight from the floor",
                    defaultSeries: 8,
                    setsDone: 0,
                    defaultReps: 12,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                },

                {
                    id: 'pb1',
                    name: "press-bench",
                    displayName: "Press bench",
                    description: "Pushing bar when lying on the bench",
                    defaultSeries: 4,
                    defaultReps: 10,
                    setsDone: 0,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                }

                , {
                    id: 'fb1',
                    name: "flybutter",
                    displayName: "Flybutter",
                    description: "Chest exercise",
                    defaultSeries: 2,
                    defaultReps: 8,
                    setsDone: 0,
                    userSeries: 0,
                    userReps: [], //this array length must be equal to userSeries
                    weights: [] //same as above

                }
            ]
        else return []
    },
    saveTraining(excerciseData) {
        excerciseData.userId = 1;
        excerciseData.dateCompleted = new Date();
        excerciseData.presetId = 1;

        //dispatch
    },
    getPresets() {
        let presets = [{
            presetId: 1,
            presetName: "Klata",
            exercises: [
                {
                    execiseId: 1,
                    externalMuscleCategory: 1,
                    externalExerciseId: 1,
                    exerciseName: "Laweczka plaska",
                },
                {
                    execiseId: 2,
                    externalMuscleCategory: 1,
                    externalExerciseId: 2,
                    exerciseName: "Rozpietki",
                }, {
                    execiseId: 3,
                    externalMuscleCategory: 1,
                    externalExerciseId: 3,
                    exerciseName: "Laweczka skosna",
                }
            ]
        }, {
            presetId: 2,
            presetName: "Bicpes",
            exercises: [
                {
                    execiseId: 4,
                    externalMuscleCategory: 2,
                    externalExerciseId: 11,
                    exerciseName: "Sztanga",
                },
                {
                    execiseId: 5,
                    externalMuscleCategory: 2,
                    externalExerciseId: 12,
                    exerciseName: "Sublimacja",
                }, {
                    execiseId: 6,
                    externalMuscleCategory: 2,
                    externalExerciseId: 13,
                    exerciseName: "Wyciaganie linki wyciagu dolnego",
                }
            ]
        }]

        let promis = new Promise(function (resolve) { resolve(presets) });
        return promis;
    }

}

export default FirebaseService