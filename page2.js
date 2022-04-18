// let round = 0;
// let subselect = 0;

function alertText(){
    alert("NameWeb");
}
function CreatMathQuestion(){
    let mathQuestionInput = document.getElementById("MathQuestionTextInput");
    let mathQuestionInputValue = mathQuestionInput.value;
    if(mathQuestionInputValue!=""){
        let mathQuestionOutput = document.createElement("li");
        let hrline = document.createElement("hr");
        mathQuestionOutput.appendChild(hrline);
        let deleteButton = document.createElement("button");
        let deleteButtonText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonText);
        deleteButton.id = "deleteButton";
        deleteButton.onclick = function(){
            var questionList = document.getElementById("MathQuestionList");
            questionList.removeChild(mathQuestionOutput);
           
        };
        mathQuestionOutput.appendChild(deleteButton);
        let link = "page3-Math.html";
        let element = document.createElement("a");
        element.setAttribute("href", link);
        element.className = "linktop3";
        element.innerHTML = mathQuestionInputValue;
        mathQuestionOutput.appendChild(element);
        mathQuestionOutput.id = "mathQuestionLi";
       
        
        document.getElementById("MathQuestionList").appendChild(mathQuestionOutput);
        round+=1;

    }
}

function CreatEngQuestion(){
    let engQuestionInput = document.getElementById("EngQuestionTextInput");
    let engQuestionInputValue = engQuestionInput.value;
    if(engQuestionInputValue!=""){

        let engQuestionOutput = document.createElement("li");
        let hrline = document.createElement("hr");
        engQuestionOutput.appendChild(hrline);
        let deleteButton = document.createElement("button");
        let deleteButtonText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonText);
        deleteButton.id = "deleteButton";
        deleteButton.onclick = function(){
            var questionList = document.getElementById("EngQuestionList");
            questionList.removeChild(engQuestionOutput);
           
        };
        engQuestionOutput.appendChild(deleteButton);
        let link = "page3-Eng.html";
        let element = document.createElement("a");
        element.setAttribute("href", link);
        element.className = "linktop3";
        element.innerHTML = engQuestionInputValue;
        engQuestionOutput.appendChild(element);
        // let text = document.createElement("h4");
        // let textNode = document.createTextNode("name");
        // textNode.id = "nameNode";
        //  text.appendChild(textNode);
        // engQuestionOutput.appendChild(textNode);
        engQuestionOutput.id = round.toString();

        
        document.getElementById("EngQuestionList").appendChild(engQuestionOutput);
    }
}

function CreatAnswer(){
    let ansInput = document.getElementById("ansTextInput");
    let ansInputValue = ansInput.value;
    if(ansInputValue!=""){

        let ansOutput = document.createElement("li");
        let ansTextNode = document.createTextNode(ansInputValue);
        ansOutput.appendChild(ansTextNode);
        ansOutput.id = round.toString();
        let deleteButton = document.createElement("button");
        let deleteButtonText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonText);
        deleteButton.id = round.toString();
        deleteButton.onclick = function(){
            var replyList = document.getElementById("ReplyList");
            replyList.removeChild(ansOutput);
           
        };
        ansOutput.appendChild(deleteButton);
        document.getElementById("ReplyList").appendChild(ansOutput);
        round+=1;
    }
}


// function CreatEngQuestion(input){
    
//     let engQuestionInputValue = input;
//     alert(engQuestionInputValue)
//     if(engQuestionInputValue!=""){
        

//         let engQuestionOutput = document.createElement("li");
//         let hrline = document.createElement("hr");
//         engQuestionOutput.appendChild(hrline);
//         let link = "page3-Eng.html";
//         let element = document.createElement("a");
//         element.setAttribute("href", link);
//         element.className = "linktop3";
//         element.innerHTML = engQuestionInputValue;
//         // let engQuestionTextNode = document.createTextNode(engQuestionInputValue);
//         // engQuestionOutput.appendChild(engQuestionTextNode);
//         engQuestionOutput.appendChild(element);
//         engQuestionOutput.id = round.toString();
//         let deleteButton = document.createElement("button");
//         let deleteButtonText = document.createTextNode("Delete");
//         deleteButton.appendChild(deleteButtonText);
//         deleteButton.id = "deleteButton";
//         deleteButton.onclick = function(){
//             var questionList = document.getElementById("EngQuestionList");
//             questionList.removeChild(engQuestionOutput);
            
//         };
//         engQuestionOutput.appendChild(deleteButton);
//         document.getElementById("EngQuestionList").appendChild(engQuestionOutput);
//         alert("yesss")
//     }
// }

// function CreatAnswer(){
//     let ansInput = document.getElementById("ansTextInput");
//     let ansInputValue = ansInput.value;
//     if(ansInputValue!=""){

//         let ansOutput = document.createElement("li");
//         let ansTextNode = document.createTextNode(ansInputValue);
//         ansOutput.appendChild(ansTextNode);
//         ansOutput.id = round.toString();
//         let deleteButton = document.createElement("button");
//         let deleteButtonText = document.createTextNode("Delete");
//         deleteButton.appendChild(deleteButtonText);
//         deleteButton.id = round.toString();
//         deleteButton.onclick = function(){
//             var replyList = document.getElementById("ReplyList");
//             replyList.removeChild(ansOutput);
           
//         };
//         ansOutput.appendChild(deleteButton);
//         document.getElementById("ReplyList").appendChild(ansOutput);
//         round+=1;
//     }
// }
function selectAssignValue(let){
    subselect=let;

}
function finishQuestion(){
    let TitleInputValue = document.getElementById("QuestionTextInput").value;
    
    if(subselect==0){
        alert("Please choose subject");
    }
    else if(subselect==1){
        if(TitleInputValue.length==0|| TitleInputValue.trim()==""){
            alert("Please inform title");
        }
        else{
            // function name();
            window.location.href ="main.html";
        }
        
    }
    else if(subselect==2){
        if(TitleInputValue.length==0 || TitleInputValue.trim()==""){
            alert("Please inform title");
        }
        else{
            
            // function name();
            window.location.href ="main.html";
        }
        
    }
}

function CreateQuestion(){
    window.location.href = "CreateQuestion.html";
}
function MyQuestion(){
    window.location.href = "MyQuestion.html";
}
function cancel(){
    window.location.href = "main.html";
}