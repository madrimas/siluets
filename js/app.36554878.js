(function(e){function t(t){for(var n,s,i=t[0],a=t[1],u=t[2],d=0,l=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o={app:0},c=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-1002e0f0":"ff206c7d","chunk-2d0e8850":"acb8f48d","chunk-4b8912d6":"55fcda07","chunk-5dc2c362":"b2281c0e","chunk-2d0e6895":"398dfe3f","chunk-3b3af65f":"4a05b656","chunk-e3fc5f2a":"1e1e04bf"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r={"chunk-1002e0f0":1,"chunk-4b8912d6":1,"chunk-3b3af65f":1,"chunk-e3fc5f2a":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1002e0f0":"ba5aca59","chunk-2d0e8850":"31d6cfe0","chunk-4b8912d6":"9f01ce7d","chunk-5dc2c362":"31d6cfe0","chunk-2d0e6895":"31d6cfe0","chunk-3b3af65f":"fb61eb6b","chunk-e3fc5f2a":"b45cba88"}[e]+".css",o=a.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete s[e],f.parentNode.removeChild(f),r(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/siluets/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],c={name:"App"},i=c,a=(r("cf25"),r("2877")),u=Object(a["a"])(i,s,o,!1,null,null,null),d=u.exports,l=r("8c4f");n["default"].use(l["a"]);var f=new l["a"]({routes:[{path:"/",component:()=>Promise.all([r.e("chunk-5dc2c362"),r.e("chunk-3b3af65f")]).then(r.bind(null,"bb51")),children:[{path:"training/",name:"training",component:()=>r.e("chunk-e3fc5f2a").then(r.bind(null,"b707"))},{path:"presets/",name:"presets",component:()=>r.e("chunk-2d0e8850").then(r.bind(null,"8a2c"))},{path:"creator/:presetId",name:"creator",component:()=>r.e("chunk-1002e0f0").then(r.bind(null,"b867"))},{path:"measurements/",name:"measurements",component:()=>Promise.all([r.e("chunk-5dc2c362"),r.e("chunk-2d0e6895")]).then(r.bind(null,"98bb"))},{path:"progress/",name:"training-progress",component:()=>r.e("chunk-4b8912d6").then(r.bind(null,"e65a"))}]}]}),h=r("2f62"),g=r("6c33"),p=r("90d2"),m=r("7f1e");const v={exercises:null,currentEx:null,currentSet:1,showSnackbar:!1,duration:4e3,parentPresetId:null,training:{}},P={exercises(e){return e.training.exercises},currentExercise(e){return e.currentEx},currentSet(e){return e.currentSet},showSnackbar(e){return e.showSnackbar},duration(e){return e.duration},parentPresetId(e){return e.training.parentPresetId},training(e){return e.training}},x={[g["h"]](e,t){v.currentSet+=1},[g["g"]](e,t){v.currentEx=t;let r=t.userReps.length;v.currentSet=0!=r?r-1:1},[g["d"]](e,t){console.log(t),v.currentEx=t,v.currentSet<=1||(v.currentSet-=1)},[g["n"]](e,t){v.showSnackbar=t},[g["r"]](e,t){console.log("fetchExercises"),v.exercises=null,m["a"].getExercises(t).then(t=>{e.commit(p["m"],t)})},[g["j"]](e){let t=JSON.parse(JSON.stringify(v.training.exercises));t.forEach((e,r)=>{let n=e.userReps,s=e.weights;null!==n[n.length-1]&&null!==s[s.length-1]||(t[r].userReps=n.filter(e=>null!==e),t[r].weights=s.filter(e=>null!==e))});let r={exercises:t,parentPresetId:v.training.parentPresetId};m["a"].saveTraining(r)}},I={[p["e"]](e,t){e.currentSet=t},[p["m"]](e,t){e.training=t}};var b={state:v,actions:x,getters:P,mutations:I},E=r("bc3a"),w=r.n(E),y=r("a7fe"),k=r.n(y);const C="http://89.79.28.33:8000/api/v2/",S="muscle",F="exercise",M="wger.de",N={init(){n["default"].use(k.a,w.a),n["default"].axios.defaults.baseURL=C},getMuscleCategories(){return n["default"].axios.get(""+S).catch(e=>{throw new Error("Exercise Api "+e)})},getWorkoutsForCategory(e){console.log("Category choosen: "+e);let t={muscles:e,license_author:M};return n["default"].axios.get(""+F,{params:t}).catch(e=>{throw new Error("Exercise Api "+e)})}};var U=N;const D={muscleCategories:[],muscleCategorySelection:!0,exercisesInCategory:[],choosenMuscle:{}},j={muscleCategories(e){return e.muscleCategories},muscleCategorySelection(e){return e.muscleCategorySelection},exercisesInCategory(e){return e.exercisesInCategory}},L={[g["o"]](e){D.muscleCategories=null,e.commit(p["a"],!0),e.commit(p["b"],{}),U.getMuscleCategories().then(({data:t})=>{e.commit(p["k"],t.results)})},[g["p"]](e,t){U.getWorkoutsForCategory(t.muscleGroup).then(({data:t})=>{e.commit(p["g"],t.results)})},[g["k"]](e,t){D.exercisesInCategory=null;let r={muscleGroup:t.id};e.commit(p["b"],t),e.commit(p["a"],!1),e.dispatch(g["p"],r)},[g["c"]](e,t){e.dispatch(g["b"],t),e.commit(p["a"],!0),e.commit(p["b"],{}),e.commit(p["g"],[])}},A={[p["k"]](e,t){e.muscleCategories=t},[p["b"]](e,t){e.choosenMuscle=t},[p["a"]](e,t){e.muscleCategorySelection=t},[p["g"]](e,t){e.exercisesInCategory=t}};var O={state:D,getters:j,actions:L,mutations:A};const T={focusedPreset:null,focusedPresetId:null,presets:null,expanded:{},createDialog:!1,createdPresetName:"",editionMode:!1},R={focusedPreset(e){return e.focusedPreset},focusedPresetId(e){return e.focusedPresetId},presets(e){return e.presets},expanded(e){return e.expanded},createDialog(e){return e.createDialog},createdPresetName(e){return e.createdPresetName},editionMode(e){return e.editionMode}},B={[g["q"]](e){console.log("Action triggered: ",g["q"]),null===T.presets&&m["a"].getPresets().then(t=>{e.commit(p["l"],t)})},[g["f"]](e){let t={presetId:null,presetName:T.createdPresetName,favouritePresetNo:0,isFavouritePreset:!1,exercises:[]};e.commit(p["c"],"");let r=m["a"].addPreset(t);T.presets.push(r)},[g["e"]](e){e.commit(p["c"],"")},[g["b"]](e,t){let r={exerciseId:t.exercise.id,externalExerciseId:t.exercise.id,exerciseName:t.exercise.name},n=T.presets.find(e=>e.presetId===t.presetId);n.exercises.push(r),console.log(t),m["a"].addExerciseToPreset(t)},[g["l"]](e,t){let r=T.presets.find(e=>e.presetId===t.preset.presetId);console.log("Edited preset: ",r);let n=null;r.exercises.forEach((e,r)=>{e.exerciseId===t.exercise.exerciseId&&(n=r)}),null!==n&&r.exercises.splice(n,1),m["a"].removeExerciseFromPreset(t)},[g["m"]](e,t){let r=null;T.presets.forEach((e,n)=>{e.presetId===t.presetId&&(r=n)}),null!==r&&T.presets.splice(r,1),m["a"].removePreset(t)},[g["s"]](e,t){m["a"].updateFavouritePresetFlag(t)}},_={[p["h"]](e,t){e.focusedPreset=t},[p["i"]](e,t){e.focusedPresetId=t},[p["l"]](e,t){t.forEach(t=>{e.expanded[t.presetId]=!1}),e.presets=t},[p["d"]](e,t){console.log(t),e.createDialog=t},[p["c"]](e,t){e.createdPresetName=t},[p["f"]](e){e.editionMode=!e.editionMode}};var V={state:T,getters:R,actions:B,mutations:_};const W={isUserLoggedIn:!1},q={isUserLoggedIn(e){return e.isUserLoggedIn}},G={[g["t"]](e,t){let r=m["a"].isUserLoggedIn();console.log("dupa",r),e.commit(p["n"],r)},[g["u"]](e,t){m["a"].login(t).then(()=>{e.dispatch(g["t"])}).catch((function(e){console.log("Login error"+e)}))},[g["v"]](e,t){m["a"].register(t).then(()=>{e.dispatch(g["t"])}).catch((function(e){console.log("Register error"+e)}))}},z={[p["n"]](e,t){e.isUserLoggedIn=t}};var J={state:W,getters:q,mutations:z,actions:G};const K={measurements:[]},X={measurements(e){return e.measurements}},$={[g["a"]](e,t){t.date=new Date;let r=m["a"].addMeasurement(t);K.measurements.push(r)},[g["i"]](e){m["a"].fetchMeasurements().then(t=>{e.commit(p["j"],t)})}},H={[p["j"]](e,t){e.measurements=t}};var Y={state:K,getters:X,actions:$,mutations:H};n["default"].use(h["a"]);var Q=new h["a"].Store({modules:{training:b,presetCreator:O,presets:V,home:J,measurements:Y}}),Z=r("43f9"),ee=r.n(Z);r("51de"),r("e094");n["default"].use(ee.a),U.init(),m["a"].init(),new n["default"]({router:f,store:Q,render:e=>e(d)}).$mount("#app")},"6c33":function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"g",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"n",(function(){return c})),r.d(t,"r",(function(){return i})),r.d(t,"j",(function(){return a})),r.d(t,"o",(function(){return u})),r.d(t,"p",(function(){return d})),r.d(t,"k",(function(){return l})),r.d(t,"c",(function(){return f})),r.d(t,"q",(function(){return h})),r.d(t,"f",(function(){return g})),r.d(t,"e",(function(){return p})),r.d(t,"l",(function(){return m})),r.d(t,"m",(function(){return v})),r.d(t,"s",(function(){return P})),r.d(t,"b",(function(){return x})),r.d(t,"t",(function(){return I})),r.d(t,"u",(function(){return b})),r.d(t,"v",(function(){return E})),r.d(t,"a",(function(){return w})),r.d(t,"i",(function(){return y}));const n="endSingleSet",s="currentExercise",o="backOneSet",c="showTrainingSnackbar",i="trainingPresetChange",a="finishTraining",u="startCategoriesFetch",d="startExercisesFetch",l="handleMuscleChoice",f="afterChooseAction",h="startPresetsFetch",g="confirmPresetCreation",p="cancelPresetCreation",m="removeExerciseFromPreset",v="removePreset",P="updateFavouritePresetFlag",x="addToTraining",I="checkIfUserIsLoggedIn",b="userLogin",E="userRegister",w="addMeasurement",y="fetchMeasurements"},"7f1e":function(e,t,r){"use strict";const n={apiKey:"AIzaSyBg3a6lGrRlVPVEMgxo3ryA83WIc4eXPnY",authDomain:"siluets-397c1.firebaseapp.com",databaseURL:"https://siluets-397c1.firebaseio.com",projectId:"siluets-397c1",storageBucket:"siluets-397c1.appspot.com",messagingSenderId:"462230763655",appId:"1:462230763655:web:0596633f00cafcf63de022",measurementId:"G-4GBBR7CX0V"};var s=r("8aa5");r("e71f");const o={init(){0===s["apps"].length?(s["initializeApp"](n),console.log("firebase init")):console.log("firebase already initialized")},getExercises(e){var t=s["firestore"]();let r=s["auth"]().currentUser.uid;return t.collection("presets").where("userId","==",r).where("favouritePresetNo","==",e).get().then(e=>{var r=[];e.docs.forEach(e=>{r.push(e.id)});var n={parentPresetId:null,exercises:[]};return r.forEach((function(e){n=t.collection("presets").doc(e).get().then(e=>{let t=e.data(),r={parentPresetId:t.presetId,exercises:t.exercises};return r})})),Promise.resolve(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},saveTraining(e){var t=s["firestore"]();e.dateCompleted=new Date,e.userId=s["auth"]().currentUser.uid;var r=t.collection("trainings").doc();r.set({trainingId:r.id,dateCompleted:e.dateCompleted,presetId:e.parentPresetId,userId:e.userId,exercises:e.exercises}).then((function(){console.log("Document written with ID: ",r.id)})).catch((function(e){console.error("Error adding document: ",e)}))},getPresets(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("presets").where("userId","==",t).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("presets").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},removeExerciseFromPreset(e){console.log(e);var t=s["firestore"]();let r=e.preset,n=e.exercise;t.collection("presets").doc(r.presetId).update({exercises:s["firestore"].FieldValue.arrayRemove(n)})},removePreset(e){var t=s["firestore"]();t.collection("presets").doc(e.presetId).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},addPreset(e){var t=s["firestore"](),r=t.collection("presets").doc();return e.creationDate=new Date,e.userId=s["auth"]().currentUser.uid,e.presetId=r.id,console.log(e),r.set({presetId:e.presetId,userId:e.userId,creationDate:e.creationDate,presetName:e.presetName,isFavouritePreset:e.isFavouritePreset,favouritePresetNo:e.favouritePresetNo,exercises:e.exercises}).then((function(){console.log("Document written with ID: ",r.id)})).catch((function(e){console.error("Error adding document: ",e)})),e},updateFavouritePresetFlag(e){var t=s["firestore"]();e.isFavouritePreset?t.collection("presets").where("isFavouritePreset","==",!0).where("userId","==",e.userId).get().then(r=>{e.favouritePresetNo=r.size+1,this.updateFavouritePresetValue(t,e)}):(e.favouritePresetNo=0,this.updateFavouritePresetValue(t,e))},updateFavouritePresetValue(e,t){let r=e.collection("presets").doc(t.presetId);r.update({isFavouritePreset:t.isFavouritePreset,favouritePresetNo:t.favouritePresetNo}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}))},addExerciseToPreset(e){let t=e.presetId,r=e.exercise;console.log(t+" exercise",r);let n={exerciseId:r.id,exerciseName:r.name,description:r.description,muscleId:r.muscles[0],defaultReps:void 0!=r.defaultReps?exercises.defaultReps:0,defaultSeries:void 0!=r.defaultSeries?exercises.defaultSeries:0,setsDone:void 0!=r.setsDone?exercises.setsDone:0,userReps:[],userSeries:void 0!=r.userSeries?exercises.userSeries:0,weights:[]};console.log(n);var o=s["firestore"](),c=o.collection("presets").doc(t);c.update({exercises:s["firestore"].FieldValue.arrayUnion(n)})},getUserButterflyExercise(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("statistics").where("userId","==",t).where("exerciseName","==","Butterfly reverse").orderBy("dateCompleted").limit(4).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("statistics").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},getUserMeasurement(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("statistics").where("userId","==",t).where("message","==","Measurement statistic").orderBy("date").limit(5).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("statistics").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},findMaxWeightForBiceps(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("statistics").where("userId","==",t).where("message","==","Max biceps weight for biceps curl exercise").orderBy("dateCompleted").limit(7).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("statistics").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},getAllTrainings(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("trainings").where("userId","==",t).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("trainings").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))},isUserLoggedIn(){var e=s["auth"]().currentUser;return!!e},login(e){return s["auth"]().signInWithEmailAndPassword(e.email,e.password)},register(e){return s["auth"]().createUserWithEmailAndPassword(e.email,e.password)},logout(){s["auth"]().signOut().then((function(){})).catch((function(e){console.log("Logout error"+e)}))},addMeasurement(e){console.log(e);var t=s["firestore"](),r=t.collection("measurements").doc();return e.userId=s["auth"]().currentUser.uid,e.id=r.id,r.set({id:e.id,userId:e.userId,date:e.date,hips:e.hips,waist:e.waist,weight:e.weight}).then((function(){console.log("Document written with ID: ",r.id)})).catch((function(e){console.error("Error adding document: ",e)})),e},fetchMeasurements(){var e=s["firestore"]();let t=s["auth"]().currentUser.uid;return e.collection("measurements").where("userId","==",t).get().then(t=>{var r=[];t.docs.forEach(e=>{r.push(e.id)});var n=[];return r.forEach((function(t){n.push(e.collection("measurements").doc(t).get().then(e=>e.data()))})),Promise.all(n)}).catch((function(e){console.log("Error getting documents: ",e)}))}};t["a"]=o},"90d2":function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"k",(function(){return s})),r.d(t,"g",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i})),r.d(t,"h",(function(){return a})),r.d(t,"i",(function(){return u})),r.d(t,"l",(function(){return d})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return f})),r.d(t,"f",(function(){return h})),r.d(t,"n",(function(){return g})),r.d(t,"m",(function(){return p})),r.d(t,"j",(function(){return m}));const n="setCurrentSet",s="setMuscleCategories",o="setFetchedExercises",c="setChoosenMuscle",i="setCategorySelection",a="setFocusedPreset",u="setFocusedPresetId",d="setPresets",l="setCreateDialog",f="setCreatedPresetName",h="setEditionMode",g="setUserLoggedIn",p="setTraining",m="setMeasurements"},"9fba":function(e,t,r){},cf25:function(e,t,r){"use strict";var n=r("9fba"),s=r.n(n);s.a}});
//# sourceMappingURL=app.36554878.js.map