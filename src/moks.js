const products = [
    {
      "id": 1,
      "nombre": "Nueces",
      "img": "nueces1.jpg",
      "precio": 1000,
      "stock": 10,
      "categoria": "Frutas Abrillantadas"
    },

    {
      "id": 2,
      "nombre": "Almendras",
      "img": "almendras.webp",
      "precio": 2000,
      "stock": 5,
      "categoria": "Frutos Secos"
    },
    {
      "id": 3,
      "nombre": "Pistachos",
      "img": "pistachos.jpg",
      "precio": 1500,
      "stock": 30,
      "categoria": "Frutos Secos"
    },
    {
      "id": 4,
      "nombre": "Avellanas",
      "img": "avellanas.jpg",
      "precio": 1850,
      "stock": 41,
      "categoria": "FrutosSecos"
    },
    {
      "id": 5,
      "nombre": "Castañas",
      "img": "castañas.jpg",
      "precio": 1850,
      "stock": 15,
      "categoria": "Condimentos"
    },
    {
      "id": 6,
      "nombre": "Coco",
      "img": "Coco.webp",
      "precio": 1800,
      "stock": 69,
      "categoria": "Frutos Secos"
    },
    {
      "id": 7,
      "nombre": "Pasas De Uvas",
      "img": "pasasdeuvas.jpg",
      "precio": 700,
      "stock": 0,
      "categoria": "Frutos Secos"
    },
    {
      "id": 8,
      "nombre": "Mani",
      "img": "mani.png",
      "precio": 600,
      "stock": 70,
      "categoria": "Frutos Secos"
    }
    ]


    export const getProducts = () =>  {
      return new Promise ((resolve) =>{
          setTimeout ( ()=>{
              resolve (products)
          },500)
  
         
      })}

      export const getProductsId = (productsId) =>  {
        return new Promise ((resolve) =>{
            setTimeout ( ()=>{
                resolve(products.find (prod => prod.id === productsId));
            },500)
  
        })
  
  }
  
  