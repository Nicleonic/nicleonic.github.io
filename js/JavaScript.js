"use strict";

window.onload = function(){
    let iconAction = document.querySelector(".icon-action");
    let navMenu = document.querySelector(".navigation");
    iconAction.onclick = () =>{
        navMenu.classList.toggle('active');
        console.log("touch");
    }
    window.onscroll = () =>{
        navMenu.classList.remove('active');
    }
    
    window.addEventListener('keydown', (e)=>{
        if(e.key === "Enter"){
            onsubmit();
            console.log("Onsubmit click");
        }
    });

    let readMore1 = document.querySelector('#rMore1');
    let readMore2 = document.querySelector('#readMore2');
    let readMore2Target = document.querySelector('.hiden-p2');
    let newDiv = document.createElement("div");

    readMore2.addEventListener('click', (e) =>{
        readMore2Target.classList.toggle('active');
    });

    let hidenP = document.querySelector('.hiden-p');
    readMore1.addEventListener('click', (e) =>{
        hidenP.classList.toggle('active');
        readMore1.parentElement.appendChild(newDiv);
        newDiv.classList.background = 'red';
        // newDiv.innerHTML = "Hello!";
        // console.log(readMore1.parentElement);

    });
    // -----Employee card
    let card = document.querySelectorAll('.employee');
    card.forEach( el => {
        if(el.getAttribute(id)== "nicleo"){
            el.add
        }
    });
   
    // formular---------------------------
    let form = document.getElementById('form');
    let formName = document.querySelector('#name');
    let mailForm = document.querySelector('#mail');
    let formdate = document.querySelector('#date');
    let formMsg = document.querySelector('#msg');
    let gFemale = document.querySelector('#female');
    let gMale = document.querySelector('#male');
    let submitBtn = document.querySelector('#formSubmit');
    let errorDisplayer = document.querySelector('#error');
    let gender = function(m,f){
        if(m.checked == "true"){
            console.log("male")

        }
        else{
            console.log("female");
        }
    }

    var onsubmit = function(e){
        e.preventDefault();
        console.log("click on " + e.target);
        let formDatas = new Object();
        formDatas.name = formName.value;
        formDatas.mail = mailForm.value;
        formDatas.date = formdate.value;
        formDatas.msg = formMsg.value;
        formDatas.Gender = gender(gMale,gFemale);

        let display = document.querySelector('.display');
        let myArray = [formDatas.name,formDatas.mail,formDatas.date,formDatas.msg];
        for(let i = 0; i < myArray.length; i++){
            let newDiv = document.createElement("div");
            newDiv.innerText = myArray[i];
            display.style.display = "block";
            console.log(myArray[i]);
            display.appendChild(newDiv);
            if(formDatas.name === "" || formDatas.name === undefined){
                break;
            }
        }
        if(formDatas.name === "" || formDatas.name === undefined){
            errorDisplayer.innerText = "Name is required";
            formName.style.add(invalid);
            formName.classList.add(invalid);

        }
        else if(formDatas.mail === "" || formDatas.mail === undefined ){
            errorDisplayer.innerText = "Mail is required";
        }
        
        console.log("Name " +  formDatas.name + '\n' + formDatas.mail + '\n' + formDatas.date + '\n' + formDatas.msg);
    }

    submitBtn.addEventListener('click', onsubmit);

    form.addEventListener('submit', (e)=>{
        console.log("form submit");
    })

    // onSubmitfunction

}