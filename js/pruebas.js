
function correo() {
    let name = document.getElementsByTagName("input")[0].value;
    let email = document.getElementsByTagName("input")[1].value;
    let pNumber = document.getElementsByTagName("input")[2].value;
    let mess = document.getElementsByTagName("input")[3].value;
  
    let data = {
      name: name,
      email: email,
      message: mess,
    };
    
    emailjs.send("pawMessage","template_yy4zfvf", data, "user_2wDdPWJ65gWxxaA6ZWMLm")
      .then(function(response) {
         if(response.text === 'OK'){
            alert('El correo se ha enviado de forma exitosa');
         }
         console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
         alert('Ocurrió un problema al enviar el correo');
         console.log("FAILED. error=", err);
      });
  }


/* function correo(){
  let name = document.getElementsByTagName("input")[0].value;
  let email = document.getElementsByTagName("input")[1].value;
  let pNumber = document.getElementsByTagName("input")[2].value;
  let mess = document.getElementsByTagName("input")[3].value;

  console.log("hola2");

  emailjs.sendFrom("pawMessage","template_yy4zfvf", {
  from_name = name,
  from_email = email,
  message = mess,
  }, "user_2wDdPWJ65gWxxaA6ZWMLm")
    
  .then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
  console.log('FAILED...', error);
  });

}

//ID 4bc90706-0e8a-443d-b244-8b85f84f82d7
//Correo 166d54d0-ec2f-4313-97d3-aafdd2c8f947@mailslurp.biz


/* async function enviar(){
  let text = correo();
  console.log(text);

  await axios({
    method: "POST",
    url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
    data: {
      senderId: "4bc90706-0e8a-443d-b244-8b85f84f82d7",
      to: "fe099897-b98f-47c2-b2a5-3c3120b1098d@mailslurp.biz",
      subject: "Prueba",
      body: "hola",
    },
  });
  alert("Envio Exitoso");
} */

