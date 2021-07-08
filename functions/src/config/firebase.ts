import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

const projectName = functions.config().project.id

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
    projectId: projectName,
    clientEmail: functions.config().client.email,
  }),
  databaseURL: `https://${projectName}.firebaseio.com`
})

const db = admin.firestore()

export { admin, db }
