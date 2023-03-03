const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");

admin.initializeApp();

const db = admin.firestore();
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createBundle = functions.https.onRequest(async (request, response) => {
  const modelSubCol = await db.collectionGroup("model").get();
  //   const modelAll = [];
  //   modelSubCol.forEach((item) => {
  //     modelAll.push({ id: item.id, ...item.data() });
  //   });
  //   response.send(modelAll);
  const bundleBuffer = db
    .bundle("model")
    .add("model-query", modelSubCol)
    .build();

  response.set("Cache-Control", "public, max-age=300, s-maxage=600");
  response.end(bundleBuffer);
});
