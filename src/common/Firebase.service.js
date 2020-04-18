import Vue from "vue";

const FirebaseService = {
    init() {
        //   Unmock this shit;
    },
    getExercises() {
        return [
            {
                id: 'dl1',
                name: "deadlift",
                displayName: "Deadlift",
                description: "Lifthing weight from the floor",
                defaultSeries: 4,
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
                defaultSeries: 4,
                defaultReps: 12,
                userSeries: 0,
                userReps: [], //this array length must be equal to userSeries
                weights: [] //same as above

            }

            , {
                id: 'bf1',
                name: "butterfly",
                displayName: "Butterfly",
                description: "Chest excercise",
                defaultSeries: 4,
                defaultReps: 12,
                userSeries: 0,
                userReps: [], //this array length must be equal to userSeries
                weights: [] //same as above

            }
        ]
    },

}

export default FirebaseService