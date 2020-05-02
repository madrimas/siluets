const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.calculateButterflyWeights = functions.firestore.document('trainings/{id}').onWrite((snapshot, context) => {
    const trainingData = snapshot.before.data()

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
