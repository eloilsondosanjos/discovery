const express =  require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
  const items = [
    { 
      title: "D",
      message: "esenvolver aplicações/serviçoes de forma fácil"
    },
    { 
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    { 
      title: "M",
      message: "uito fácil de usar"
    },
    { 
      title: "A",
      message: "prender uma nova tecnologia é sempre importante"
    },
    { 
      title: "I",
      message: "nstalação descomplicada"
    },
    { 
      title: "S",
      message: "intaxe muito simples, só não usa quem não quer"
    }
  ];

  const subtitle = " EJS é uma linguagem simples de templating que permite gerar marcação HTML com JavaScript simples."
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res){
  res.render("pages/about");
});

app.listen(8080, () =>{
  console.log("Server runing in http://localhost:8080/");
})