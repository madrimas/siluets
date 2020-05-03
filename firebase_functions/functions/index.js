const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.calculateWeights = functions.firestore.document('trainings/{id}').onWrite((snapshot, context) => {
    const trainingData = snapshot.after.data()

    const butterflyExerciseIndex = trainingData.exercises.findIndex(x => x.exerciseName === 'Butterfly reverse')

    let data = null
    if (butterflyExerciseIndex !== -1) {
        const exerciseWeights = [...trainingData.exercises[butterflyExerciseIndex].weights]

        data = {
            trainingId: trainingData.trainingId,
            userId: trainingData.userId,
            trainingId: trainingData.trainingId,
            weights: exerciseWeights,
            exerciseName: trainingData.exercises[butterflyExerciseIndex].exerciseName,
            dateCompleted: trainingData.dateCompleted
        }
    }

    const bicepsCurlExerciseIndex = trainingData.exercises.findIndex(x => x.exerciseName === 'Biceps curls with SZ-bar')

    if (bicepsCurlExerciseIndex !== -1) {
        let maxWeight = Math.max(trainingData.exercises[bicepsCurlExerciseIndex].weights);
        data.trainingId = trainingData.trainingId
        data.userId = trainingData.userId
        data.maxBicepsWeight = maxWeight
        data.message = 'Max biceps weight for biceps curl exercise'
    }
    if (data !== null) {
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
