const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.calculateButterflyWeights = functions.firestore.document('trainings/{id}').onWrite((snapshot, context) => {
    const trainingData = snapshot.after.data()

    const butterflyExerciseIndex = trainingData.exercises.findIndex(x => x.exerciseName === 'Butterfly reverse')

    if (butterflyExerciseIndex !== -1) {
        const exerciseWeights = [...trainingData.exercises[butterflyExerciseIndex].weights]

        let data = {
            trainingId: trainingData.trainingId,
            userId: trainingData.userId,
            trainingId: trainingData.trainingId,
            weights: exerciseWeights,
            exerciseName: trainingData.exercises[butterflyExerciseIndex].exerciseName,
            dateCompleted: trainingData.dateCompleted
        }

        return admin.firestore().collection('statistics').doc(trainingData.trainingId).set(data)
    }
})

exports.measurement = functions.firestore.document('measurements/{id}').onWrite((snapshot, context) => {
    const measurementData = snapshot.after.data()

    let data = {
        hips: measurementData.hips,
        userId: measurementData.userId,
        waist: measurementData.waist,
        weight: measurementData.weight,
        date: measurementData.date,
        message: 'Measurement statistic'
    }

    return admin.firestore().collection('statistics').doc(measurementData.id).set(data)
})
