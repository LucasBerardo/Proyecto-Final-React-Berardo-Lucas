const products = [
    {
      "id": 1,
      "nombre": "Nueces",
      "img": "./img/nueces1.jpg",
      "precio": 1000,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },

    {
      "id": 2,
      "nombre": "Almendras",
      "img": "../img/almendras.webp",
      "precio": 2000,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 3,
      "nombre": "Pistachos",
      "img": "../img/pistachos.jpg",
      "precio": 1500,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 4,
      "nombre": "Avellanas",
      "img": "../img/avellanas.jpg",
      "precio": 1850,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 5,
      "nombre": "Castañas",
      "img": "../img/castañas.jpg",
      "precio": 1850,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 6,
      "nombre": "Coco",
      "img": "../img/Coco.webp",
      "precio": 1800,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 7,
      "nombre": "Pasas De Uvas",
      "img": "../img/pasasdeuvas.jpg",
      "precio": 700,
      "stock": 1,
      "descripcion": "Frutos Secos"
    },
    {
      "id": 8,
      "nombre": "mani",
      "img": "../img/mani.png",
      "precio": 600,
      "stock": 1,
      "descripcion": "Frutos Secos"
    }
    ]


    export const getProducts = () =>  {
      return new Promise ((resolve) =>{
          setTimeout ( ()=>{
              resolve (products)
          },500)
  
         
      })
  
  }
  
  