document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos() {
  document.getElementById("headerBtn").addEventListener("click", mobileMenu);
  window.addEventListener("scroll", percentageScroll);
  document.getElementById("returnTop").addEventListener("click", returnTop);
  document.getElementById("contactForm").addEventListener("submit",formCheck);
}

function mobileMenu() {
  let list = document.getElementById("headerList");
  if (list.classList.contains("oculto")) {
    list.classList.remove("oculto");
  } else {
    list.classList.add("oculto");
  }
}

function percentageScroll() {
  document.getElementById("percentageScroll").style.width = (window.scrollY * 100) / (document.body.offsetHeight - window.innerHeight) + "%";
}

function returnTop(){
    setTimeout(()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        } , 200
    )
}

async function formCheck(event){
    event.preventDefault();
    let userName = document.getElementById("username");
    let userEmail = document.getElementById("useremail");
    let checkForm = document.getElementById("formcheck");
    let regEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let flag=false;

    if(userName.value==""){
        userName.style.borderColor = "red";
        flag=true;
    }else{
        userName.style.borderColor = "#95989A"
    }

    if(!regEx.test(userEmail.value)){
        userEmail.style.borderColor = "red";
        flag=true;
    }else{
        userEmail.style.borderColor = "#95989A"
    }

    if(checkForm.checked==false){
        checkForm.style.outline = "1px solid red";
        flag=true;
    }else{
        checkForm.style.outline = "none";
    }

    if(flag==false){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                name: userName.value,
                email: userEmail.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if(response.ok){
            let jsonResponse = await response.json();
            console.log(jsonResponse);
        }  
    }
}
