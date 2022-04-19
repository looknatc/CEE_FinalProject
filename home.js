// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyButcC16ft9OIksfzpXMryNJ4JWygneb_E",
authDomain: "ceethip-787e9.firebaseapp.com",
projectId: "ceethip-787e9",
storageBucket: "ceethip-787e9.appspot.com",
messagingSenderId: "593518444755",
appId: "1:593518444755:web:eb229779cee5612d915426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    where,
    getDoc,
    updateDoc, arrayUnion, arrayRemove,deleteField,setDoc,increment  
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// console.log("jfjfjf");
const db = getFirestore();
const questions_ref = collection(db, 'question');
// console.log(users_ref);
// const items = await getDocs(users_ref)
// items.docs.map((item) => {
//     console.log(item.id);
//     console.log(item.data().name);
    
// })
// const q = query(users_ref, where("name", "==", "nat"));
// console.log(q);
// function addInitQuestion(evt,){

//     var referenceNode = evt.srcElement;
//     var txt = referenceNode.querySelector(".text");
//     // var txt = referenceNode.querySelector(".subject");
//     // var txt = referenceNode.querySelector(".time");
//     var time = Date.now();
//     var subj = 

//     //const node = document.getElementById("myList2").lastChild;
//     //var newNode = node.cloneNode(true);
//     var button = document.createElement("button"); 
//     var townID = "N" + Date.now();
//     var town = prompt("xxxx");
//     button.innerHTML = town;
//     button.setAttribute("onclick", `openCity(event, "${townID}")`);
//     referenceNode.parentNode.insertBefore(button, referenceNode);

//     //var divs = document.querySelectorAll(".tabcontent");
//     var master = document.querySelector("#Master");
//     var newDiv = master.cloneNode(true);
//     newDiv.setAttribute("id",townID);
//     newDiv.querySelector("h3").innerHTML = town;
//     master.parentNode.insertBefore(newDiv, master);

// }


// db.collection("question").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });
// var n1 = await getDocs(questions_ref);
// var a = []
// for( var s in n1){
//     a = [... a,s.data().subject]
// }
// console.log(a)
// console.log(await getDocs(questions_ref))
// async function getallsubject(evt,obj){

//     return ret
    
// }

// async function getDocument (coll, id) {
//     const snap = await getDoc(doc(db, coll, id))
//     return snap.data()
//     // if (snap.exists())
//     //   return snap.data()
//     // else
//     //   return {xxx:xxxx}
// }


//getall section
async function getallsubject(){
    var a = {};
    const querySnapshot = await getDocs(collection(db, "subject"));
    querySnapshot.forEach((doc) => {
    a[doc.data().name] = doc.data().amount;
    });
    // console.log(a)
    return a;
    // var a = {};
    // const querySnapshot = await getDocs(collection(db, "question"));
    // querySnapshot.forEach((doc) => {
    // a[doc.data().subject] = 1;
    // });
    // // console.log(a)
    // return a;
}

async function getallquestion(obj){
    var subjname = obj.subject
    var s =  query(questions_ref, where("subject", "==", subjname));
    const querySnapshot = await getDocs(s);
    var ret = {};
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("getallquestion",doc.id, " => ", doc.data());
        ret[doc.id] = doc.data();
    });
    // var s = questions_ref.where('subject', '==', subjname).get()
    return ret;
    
}
// console.log(await getallquestion({subject:'maths'}))
// var x = await getallquestion()
// console.log("x",x)
async function getquestion(obj){
    var id = obj.question_id;
    const docRef = doc(db, "question", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}

async function getallanswer(obj){
    
    var id = obj.question_id;
    const docRef = doc(db, "question", id);
    const docSnap = await getDoc(docRef);
    
    // console.log(docSnap.data().ans)
    return docSnap.data().ans
    // return getDocument({col:'question',id:id});
 
}
// console.log(await getallanswer({question_id:'2RLOYbZC6wUg3lxynsIu'}))




// async function addquestion(evt){
//     var txt = document.querySelector(".txt-addquestion").value;
//     var time = Date.now();
//     var subj = document.querySelector("button.active").innerHTML;
//     var ans = [];
//     const item = await addDoc(questions_ref, {
//         subject: subj,
//         text: txt,   
//         time:time,
//         ans :ans,  
//     })
//     await updateDoc(doc(db, "subject", subj), {
//         amount: increment(1)
//     });


// }

//add section
async function addquestion(obj){
    var txt = obj.question_txt;
    var time = Date.now();
    var subj = obj.subject;
    var detail = obj.detail;
    var author = obj.author;
    var ans = [];
    const item = await addDoc(questions_ref, {
        subject: subj,
        text: txt,   
        time:time,
        ans :ans, 
        author:author,
        detail:detail 
    })
    await updateDoc(doc(db, "subject", subj), {
        amount: increment(1)
    });
    console.log(item.id);
    return item.id;


}
// addquestion({question_txt:'0*0=?',subject:'maths',detail:'nsdkj',author = 'natttt'});

async function addsubject(obj){
    var subjname = obj.subject
    console.log(subjname)
    // const subjectRef = doc(db, 'subject', 'allsubject');

    // // Remove the 'capital' field from the document
    // await updateDoc(subjectRef, {
    //     "`${subjname}`" : true
    // });
    await setDoc(doc(db, "subject", subjname), {
        name: subjname,
        amount: 0
    });
    
}

async function addanswer(obj){
    var id = obj.question_id
    var anstext = obj.anstext
    var author = obj.author
    var tim = Date.now();
    var ans = {text:anstext, author:author, id:tim, time:tim}
    
    const questionRef = doc(db, "question", id);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(questionRef, {
        ans: arrayUnion(ans)
    });
    

}
// console.log(await addanswer({question_id:'2RLOYbZC6wUg3lxynsIu',author:"hhh",anstext:'5555'}))
// console.log(await getallanswer({question_id:'2RLOYbZC6wUg3lxynsIu'}))



//delete section

async function deletequestion(obj){
    var id = obj.question_id
    const questionRef = doc(db, "question", id);
    
    const questionSnap = await getDoc(questionRef);
    var subj = questionSnap.data().subject
    await updateDoc(doc(db, "subject", subj), {
        amount: increment(-1)
    });
    
    
    await deleteDoc(questionRef);
    // var referenceNode = evt.srcElement;
    // var txt = document.querySelector(".txt-addquestion").value;
    // // var txt = referenceNode.querySelector(".subject");
    // // var txt = referenceNode.querySelector(".time");
    // var time = Date.now();
    // var subj = document.querySelector("button.active").innerHTML;
    // var ans = [];
    // const item = await addDoc(questions_ref, {
    //     subject: subj,
    //     text: txt,   
    //     time:time,
    //     ans :ans,  
    // })

}
// console.log(await deletequestion({question_id:'OkJ3IqeB2NppCVagMcVM'}))

async function deletesubject(obj){
    var subjname = obj.subject
    const subjectRef = doc(db, 'subject', 'allsubject');

    // Remove the 'capital' field from the document
    await updateDoc(subjectRef, {
        subjname: deleteField()
    });

    var s =  query(questions_ref, where("subject", "==", subjname));
    const querySnapshot = await getDocs(s);
    var ret = {};
    querySnapshot.forEach((q) => {
        var questionRef = doc(db, "question", q.id);
        deleteDoc(questionRef);
        // await deleteDoc(questionRef);


        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // ret[doc.id] = doc.data().text;
    });
    // var s = questions_ref.where('subject', '==', subjname).get()
    // return ret;

}

async function deleteanswer(obj){
    var id = obj.question_id
    var ans_id = obj.ans_id
    const questionRef = doc(db, "question", id);
    var r = await getallanswer({question_id:obj.question_id})
    var x = null;
    r.forEach((eachans)=>{
        if(eachans.id ==ans_id){
            console.log(eachans);
            // await updateDoc(questionRef, {
            //     ans: arrayRemove(eachans)
            // });
            x = eachans
        }
    })
    
    await updateDoc(questionRef, {
        ans: arrayRemove(x)
    });

}
// console.log(await getallanswer({question_id:'2RLOYbZC6wUg3lxynsIu'}))
// console.log(await deleteanswer({question_id:'2RLOYbZC6wUg3lxynsIu',ans_id:1650095604622}))
// console.log(await getallanswer({question_id:'2RLOYbZC6wUg3lxynsIu'}))













// async function addquestion() {
//     console.log("add item")
//     let name = document.getElementById("username").value;
//     let pwd = document.getElementById("pwd").value;
//     // let buyer = document.getElementById("name-to-add").value;
//     const item = await addDoc(users_ref, {
//         name: name,
//         pwd: pwd,      
//     })

// }
// var addButton = document.querySelector("#addquestion");
// console.log(addButton);
// addButton.onclick = async() => {
//     await addquestion();
// }
window.addquestion = addquestion;
window.addanswer = addanswer;
window.questions_ref = questions_ref;
window.getallquestion = getallquestion;
window.getallsubject = getallsubject;
window.getallanswer = getallanswer;
window.deleteanswer = deleteanswer;
window.deletequestion = deletequestion;
window.deletesubject = deletesubject;
window.addsubject = addsubject;
window.getquestion = getquestion;
