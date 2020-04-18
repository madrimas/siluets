import Vue from "vue";
import { firebaseConfig } from '@/config/firebase.config';

import * as firebase from "firebase/app";

const FirebaseService = {
    init() {
        //   Unmock this shit;
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

}

export default FirebaseService