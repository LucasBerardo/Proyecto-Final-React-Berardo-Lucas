const products = [
    {
      "id": 1,
      "nombre": "Nueces",
      "img": "nueces1.jpg",
      "precio": 1000,
      "stock": 10,
      "categoria": "Frutas Abrillantadas",
      "descripcion": "Nueces mariposas x 1kg"
    },

    {
      "id": 2,
      "nombre": "Almendras",
      "img": "almendras.webp",
      "precio": 2000,
      "stock": 5,
      "categoria": "Frutos Secos",
      "descripcion": "Almendras x 1kg"
    },
    {
      "id": 3,
      "nombre": "Pistachos",
      "img": "pistachos.jpg",
      "precio": 1500,
      "stock": 30,
      "categoria": "Frutos Secos",
      "descripcion": "Pistachos con cascaras x 1kg"
    },
    {
      "id": 4,
      "nombre": "Avellanas",
      "img": "avellanas.jpg",
      "precio": 1850,
      "stock": 41,
      "categoria": "Frutos Secos",
      "descripcion": "Avellanas con cascara x 1kg"
    },
    {
      "id": 5,
      "nombre": "Castañas",
      "img": "castañas.jpg",
      "precio": 1850,
      "stock": 15,
      "categoria": "Condimentos",
      "descripcion": "Castañas por 2kg"
    },
    {
      "id": 6,
      "nombre": "Coco",
      "img": "Coco.webp",
      "precio": 1800,
      "stock": 69,
      "categoria": "Frutos Secos",
      "descripcion": "Coco en Hebras x 1 kg"
    },
    {
      "id": 7,
      "nombre": "Pasas De Uvas",
      "img": "pasasdeuvas.jpg",
      "precio": 700,
      "stock": 0,
      "categoria": "Frutos Secos",
      "descripcion": "Pasas de uvas negras x 1kg"
    },
    {
      "id": 8,
      "nombre": "Mani",
      "img": "mani.png",
      "precio": 600,
      "stock": 70,
      "categoria": "Frutos Secos",
      "descripcion": "Mani pelado sin sal x 1kg"
    }
    ]


    export const getProducts = () =>  {
      return new Promise ((resolve) =>{
          setTimeout ( ()=>{
              resolve (products)
          },200)
  
         
      })}

      export const getProductsId = (productsId) =>  {
        return new Promise ((resolve) =>{
            setTimeout ( ()=>{
                resolve(products.find (prod => prod.id === productsId));
            },200)
  
        })
  
  }
  
  