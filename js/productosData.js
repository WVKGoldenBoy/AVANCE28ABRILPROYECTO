const initialProducts = [
  {
    id: 1,
    nombre: "Fumigadora Nikatto 1L",
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMNIKATTO100.png",
    codigo: "FUMNIK100",
    precio: 40000,
    stock: 1,
    marca: "Nikatto",
    especificaciones: {
      capacidad: "1L", 
      uso: "Manual", 
      psi: "20-40", 
    }
  },
  {
    id: 2,
    nombre: "Fumigadora manual Husqvarna", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMHUSQ100MAN.png", 
    codigo: "FUMHUSQ100",
    precio: 85000,
    stock: 2,
    marca: "Husqvarna",
    especificaciones: {
      capacidad: "8L", 
      uso: "Manual", 
      psi: "20-40", 
    }
  },
  {
    id: 3,
    nombre: "Fumigadora manual Jacto ", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMJAC200PW.png",
    codigo: "FUMJAC200", 
    precio: 315000, 
    stock: 1, 
    Marca: "Motoborda",
    especificaciones: {
     capacidad: "20L", 
      uso: "Manual", 
      psi: "75", 
    }
  },
  {
    id: 4,
    nombre: "Fumigadora manual Royal Condor", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMROY401.png", 
    codigo: "FUMROY401",
    precio: 330000,
    stock: 4, 
    marca: "Royal Condor",
    especificaciones: {
      capacidad: "20L", 
      uso: "Manual", 
      psi: "90", 
    }
  },
  {
    id: 5,
    nombre: "Fumigadora Toyama Motorizada", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMTOY252T.png", 
    codigo: "FUMTOYA252",
    precio:  615000,
    stock: 3, 
    marca: "Toyama",
    especificaciones: {
      capacidad: "25L", 
      uso: "Motor 2Tiempos", 
      psi: "500", 
    }
  },
  {
    id: 6,
    nombre: "Fumigadora Forte Motorizada", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMFOR252T.png", 
    codigo: "FUMFOR252",
    precio:  680000,
    stock: 2, 
    marca: "Forte",
    especificaciones: {
      capacidad: "25L", 
      uso: "Motor 2Tiempos", 
      psi: "500", 
    }
  },
  {
    id: 7,
    nombre: "Fumigadora Stilh de Cañon", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMSTI511CAÑ.png", 
    codigo: "FUMSTI511",
    precio:  2500000,
    stock: 5, 
    marca: "Stilh",
    especificaciones: {
      capacidad: "20L", 
      uso: "Motor 2Tiempos", 
      psi: "20-40", 
    }
  },
  {
    id: 8,
     nombre: "Fumigadora Toyama de Cañon", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMTOY511CAÑ.png", 
    codigo: "FUMTOY511",
    precio:  950000,
    stock: 4, 
    marca: "Toyama",
    especificaciones: {
      capacidad: "14L", 
      uso: "Motor 2Tiempos", 
      psi: "20-40",
    }
  },
  {
    id: 9,
    nombre: "Fumigadora Estacionaria Power Master", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMPOW650.png", 
    codigo: "FUMECO650",
    precio:  1550000,
    stock: 2, 
    marca: "power Master",
    especificaciones: {
      caudal: "12-15L/min", 
      uso: "Motor 4 Tiempos 6,5HP", 
      psi: "300-700",
    }
  },
  {
    id: 10,
    nombre: "Fumigadora Estacionaria Ecomax", 
    categoria: "fumigadoras",
    imagen: "categorias/fumigadoras/FUMEES20030.png", 
    codigo: "FUMECO650",
    precio:  1800000,
    stock: 7, 
    marca: "Ecomax",
    especificaciones: {
      caudal: "15-28L/min", 
      uso: "Motor 4 Tiempos 6,5HP", 
      psi: "500",
    }
  },
  {
    id: 11,
    nombre: "Motobomba 2Tiempos Toyama",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPTOY122T.png",
    codigo: "WPTOY150",
    precio: 800000,
    stock: 10,
    marca: "Toyama",
    especificaciones: {
      Tipo: "Centrifuga",
      Motor: "2 Tiempos",
      Caudal: "333L/mn",
      Diametro: "1/2 x 1/2 pulgadas"
    }
  },
  {
    id: 12,
    nombre: "Motobomba Leo perifirica automatica",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPLEO200PE.png",
    codigo: "WPLEO200",
    precio: 660000,
    stock: 3,
    marca: "Leo",
    especificaciones: {
      Tipo: "Perifirica",
      Motor: "Electrico 2HP",
      Caudal: "200L/mn",
      Diametro: "1 x 1 pulgadas"
    }
  },
  {
    id: 13,
    nombre: "Motobomba Truper Sumergible Agua Sucia",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPSUB100TRU.png",
    codigo: "WPTRUSUB100",
    precio: 450000,
    stock: 4,
    marca: "Truper",
    especificaciones: {
      Tipo: "Sumergible",
      Motor: "Electrico 1HP",
      Caudal: "100L/mn",
      Diametro: "1 x 1 pulgadas"
    }
  },
  {
    id: 14,
    nombre: "Motobomba Truper sumergible Agua Limpia",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPSUB110TRU.png",
    codigo: "WPTRUSUB110",
    precio: 350000,
    stock: 10,
    marca: "Truper",
    especificaciones: {
      Tipo: "Sumergible",
      Motor: "Electrico 1/2HP",
      Caudal: "110L/mn",
      Diametro: "1/2 x 1/2 pulgadas"
    }
  },
  {
    id: 15,
    nombre: "Motobomba Leo sumergible tipo lapicero",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPLEO150SUB.png",
    codigo: "WPLEO150SUB",
    precio: 155000,
    stock: 1,
    marca: "Leo",
    especificaciones: {
      Tipo: "sumergible tipo lapicero", 
      Motor: "Electrico 1/2HP",
      Caudal: "150L/mn",
      Diametro: "1/2 x 1/2 pulgadas"
    }
  },
  {
    id: 16,
    nombre: "Motobomba Ecomax Caudal Gasolina",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPEC300.png",
    codigo: "WPEC300",
    precio: 960000,
    stock: 4,
    marca: "Ecomax",
    especificaciones: {
      Tipo: "Caudal",
      Motor: "Gasolina 4 Tiempos 6,5HP",
      Caudal: "800L/mn",
      Diametro: "3x3 pulgadas"
    }
  },
  {
    id: 17,
    nombre: "Motobomba Ecomax Caudal Diesel",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPEC200D.png",
    codigo: "WPEC200D",
    precio: 2100000,
    stock: 4,
    marca: "Ecomax",
    especificaciones: {
      Tipo: "Presion",
      Motor: "Diesel 4 Tiempos 10HP",
      Caudal: "500L/mn",
      Diametro: "2 x 2 pulgadas"
    }
  },
  {
    id: 18,
    nombre: "Motobomba Toyama Presion Diesel",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPTOY300D.png",
    codigo: "WPTOY300D",
    precio: 1800000,
    stock: 3,
    marca: "Toyama",
    especificaciones: {
      Tipo: "presion",
      Motor: "diesel 4 Tiempos 10HP",
      Caudal: "450L/mn",
      Diametro: "2 x 2 pulgadas"
    }
  },
  {
    id: 19,
    nombre: "Motobomba Forte Presion Gasolina",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPFOR1002.png",
    codigo: "WPFOR1002",
    precio: 2500000,
    stock: 1,
    marca: "Forte",
    especificaciones: {
      Tipo: "presion",
      Motor: "Gasolina 4 Tiempos 13HP",
      Caudal: "600L/mn",
      Diametro: "3 x 3 pulgadas"
    }
  },
  {
    id: 20,
    nombre: "Motobomba Forte Industrial",
    categoria: "motobombas",
    imagen: "categorias/motobombas/WPFOR1212.png",
    codigo: "WPFOR1212",
    precio: 6200000,
    stock: 1,
    marca: "Forte",
    especificaciones: {
      Tipo: "Caudal",
      Motor: "Diesel 4 Tiempos 24HP",
      Caudal: "1200L/mn",
      Diametro: "4 x 4 pulgadas"
    }
  },
  {
    id: 21,
    nombre: "Generador a mano 950W Power Master",
    categoria: "generadores",
    imagen: "categorias/generadores/GEPOM950.png",
    codigo: "GENPOW950",
    precio: 770000,
    stock: 3,
    marca: "Power Master",
    especificaciones: {
      Potencia: "950W",
      Fases: "110V",
      Motor: "2Tiempos",
      Arranque: "Manual"
    }
  },
  {
    id: 22,
    nombre: "Generador Tracker Inverter 2500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GENTRA3500.png",
    codigo: "GENTRA3500",
    precio: 2500000,
    stock: 2,
    marca: "Tracker",
    especificaciones: {
      Potencia: "2500W",
      Fases: "110V",
      Motor: "4 Tiempos",
      Arranque: "Manual"
    }
  },
  {
    id: 23,
    nombre: "Generador Husqvarna 2500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GENHUS2500.png",
    codigo: "GENHUS2500",
    precio: 2500000,
    stock: 1,
    marca: "Husqvarna",
    especificaciones: {
      Potencia: "2500W",
      Fases: "Mofasica",
      Motor: "4 Tiempos 7HP",
      Arranque: "Manual"
    }
  },
  {
    id: 24,
    nombre: "Generador Power Master 2500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GEPOM2500.png",
    codigo: "GENPOW2500",
    precio: 1950000,
    stock: 3,
    marca: "power Master",
    especificaciones: {
      Potencia: "2500W",
      Fases: "Mofasica",
      Motor: "4 Tiempos 7HP",
      Arranque: "Manual"
    }
  },
  {
    id: 25,
    nombre: "Generador Ecomax 2500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GEECO2500.png",
    codigo: "GENECO2500",
    precio: 1500000,
    stock: 7,
    marca: "Ecomax",
    especificaciones: {
      Potencia: "2500W",
      Fases: "Mofasica",
      Motor: "4 Tiempos 7HP",
      Arranque: "Manual"
    }
  },
  {
    id: 26,
   nombre: "Generador Toyama 3100W",
    categoria: "generadores",
    imagen: "categorias/generadores/GETOY3100.png",
    codigo: "GENTOY3100",
    precio: 1550000,
    stock: 5,
    marca: "Toyama",
    especificaciones: {
      Potencia: "3100W",
      Fases: "Mofasica",
      Motor: "4 Tiempos 9HP",
      Arranque: "Manual"
    }
  },
  {
    id: 27,
    nombre: "Generador Diesel Ecomax 6500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GEECO6500.png",
    codigo: "GENECO6500",
    precio: 4500000,
    stock: 2,
    marca: "Ecomax",
    especificaciones: {
      Potencia: "6500W",
      Fases: "Mofasica",
      Motor: "Diesel 4 Tiempos 13HP",
      Arranque: "Manual y Electrico"
    }
  },
  {
    id: 28,
   nombre: "Generador Husqvarna 8500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GENHUS8500.png",
    codigo: "GENHUS8500",
    precio: 3500000,
    stock: 3,
    marca: "Husqvarna",
    especificaciones: {
      Potencia: "8500W",
      Fases: "Mofasica",
      Motor: "Diesel 4 Tiempos 20HP",
      Arranque: "Manual y Electrico"
    }
  },
  {
    id: 29,
    nombre: "Generador Toyama Cabinado 8500W",
    categoria: "generadores",
    imagen: "categorias/generadores/GETOY8500.png",
    codigo: "GENTOY8500",
    precio: 6500000,
    stock: 8,
    marca: "Toyama",
    especificaciones: {
      Potencia: "8500W",
      Fases: "Mofasica",
      Motor: "Diesel 4 Tiempos 20HP",
      Arranque: "Electrico"
    }
  },
  {
    id: 30,
   nombre: "Generador Enermax industrial 50KVA",
    categoria: "generadores",
    imagen: "categorias/generadores/GENENE50000.png",
    codigo: "GENENE50000",
    precio: 15000000,
    stock: 1,
    marca: "Enermax",
    especificaciones: {
      Potencia: "50KVA",
      Fases: "Trifasico",
      Motor: "Diesel 4 Tiempos 50HP",
      Arranque: "Electrico"
    }
  },
  {
    id: 31,
    nombre: "Guadaña Stilh",
    categoria: "guadañas",
    imagen: "categorias/guadañas/STILH 291.png",
    codigo: "guast291",
    precio: 2500000, 
    stock: 4,
    marca: "Stilh",
    especificaciones: {
      cc: "60cc",
      eje: "rigido",
      potencia: "2.9HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "6.5kg"
    }
  },
  {
    id: 32,
    nombre: "Guadaña Toyama",
    categoria: "guadañas",
    imagen: "categorias/guadañas/TOYAMA RT52LB.png",
    codigo: "guatoy520",
    precio: 850000, 
    stock: 15,
    marca: "Toyama",
    especificaciones: {
      cc: "52cc",
      eje: "rigido",
      potencia: "2.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "7.5kg"
    }
  },
  {
    id: 33,
   nombre: "Guadaña Coagro Cafeterita",
    categoria: "guadañas",
    imagen: "categorias/guadañas/COAGRO 260 .png",
    codigo: "guaco260",
    precio: 650000, 
    stock: 2,
    marca: "Coagro",
    especificaciones: {
      cc: "26cc",
      eje: "rigido",
      potencia: "1.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.5L",
      peso: "5.5kg"
    }
  },
  {
    id: 34,
    nombre: "Guadaña Mitsubishi cafeterita",
    categoria: "guadanas",
    imagen: "categorias/guadañas/MITSUBISHI TU26.png",
    codigo: "guamit260",
    precio: 1200000, 
    stock: 9,
    marca: "Mitsubishi",
    especificaciones: {
      cc: "26cc",
      eje: "rigido",
      potencia: "1.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.5L",
      peso: "5.5kg"
    }
  },
  {
    id: 35,
   nombre: "Guadaña Ecomax",
    categoria: "guadañas",
    imagen: "categorias/guadañas/ECOMAX DECO2T43.png",
    codigo: "guaeco430",
    precio: 800000, 
    stock: 19,
    marca: "Ecomax",
    especificaciones: {
      cc: "43cc",
      eje: "rigido",
      potencia: "2.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "6.5kg"
    }
  },
  {
    id: 36,
    nombre: "Guadaña Husqvarna",
    categoria: "guadañas",
    imagen: "categorias/guadañas/HUSQVARNA 413RS.png",
    codigo: "guahus413",
    precio: 2400000, 
    stock: 4,
    marca: "Husqvarna",
    especificaciones: {
      cc: "43cc",
      eje: "rigido",
      potencia: "2.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "7.5kg"
    }
  },
  {
    id: 37,
   nombre: "Guadaña Maruyama",
    categoria: "guadañas",
    imagen: "categorias/guadañas/MARUYAMA.png",
    codigo: "guamar430",
    precio: 1960000, 
    stock: 1,
    marca: "Maruyama",
    especificaciones: {
      cc: "43cc",
      eje: "escualizable",
      potencia: "2.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "6.5kg"
    }
  },
  {
    id: 38,
    nombre: "Guadaña Mitsubishi",
    categoria: "guadañas",
    imagen: "categorias/guadañas/MITSUBISHI TB43.png",
    codigo: "guamit430",
    precio: 1850000, 
    stock: 4,
    marca: "Mitsubishi",
    especificaciones: {
      cc: "43cc",
      eje: "rigido",
      potencia: "2.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "6.5kg"
    }
  },
  {
    id: 39,
    nombre: "Guadaña Stilh de Espalda",
    categoria: "guadañas",
    imagen: "categorias/guadañas/STILH FR450.png",
    codigo: "guafs450",
    precio: 3100000, 
    stock: 1,
    marca: "Stilh",
    especificaciones: {
      cc: "30cc",
      eje: "escualizable",
      potencia: "1,8HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "7.5kg"
    }
  },
  {
    id: 40,
    nombre: "Guadaña Coagro de Espalda",
    categoria: "guadañas",
    imagen: "categorias/guadañas/COAGRO FLEX BG 430.png",
    codigo: "guaco430",
    precio: 1350000, 
    stock: 2,
    marca: "Coagro",
    especificaciones: {
      cc: "26cc",
      eje: "escualizable",
      potencia: "1.5HP",
      tipo_motor: "2Tiempos",
      capacidad: "0.75L",
      peso: "6.5kg"
    }
  },
  {
    id: 41,
    nombre: "Motosierra Alterman",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSALT240.png",
    codigo: "msalt300",
    precio: 680000,
    stock: 5,
    marca: "Alterman",
    especificaciones: {
      potencia: "43cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "liviano"
    }
  },
  {
    id: 42,
    nombre: "Motosierra Coagro",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSCO502.png",
    codigo: "msco502",
    precio: 630000,
    stock: 7,
    marca: "Coagro",
    especificaciones: {
      potencia: "50cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 43,
    nombre: "Motosierra Echo",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSECH520.png",
    codigo: "msech520",
    precio: 700000,
    stock: 1,
    marca: "Echo",
    especificaciones: {
      potencia: "52cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 44,
    nombre: "Motosierra Forte",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSFOR420.png",
    codigo: "msfor420",
    precio: 850000,
    stock: 3,
    marca: "Forte",
    especificaciones: {
      potencia: "42cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 45,
    nombre: "Motosierra Honda",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSHON110.png",
    codigo: "mshon110",
    precio: 1200000,
    stock: 2,
    marca: "Honda",
    especificaciones: {
      potencia: "35cc",
      espada: "16 pulgadas",
      motor: "Electrico", 
      trabajo: "liviano"
    }
  },
  {
    id: 46,
   nombre: "Motosierra Husqvarna",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSHUS182.png",
    codigo: "mshus182",
    precio: 1850000,
    stock: 5,
    marca: "Husqvarna",
    especificaciones: {
      potencia: "40cc",
      espada: "18 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 47,
    nombre: "Motosierra Shindaiwa",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSSHIN220.png",
    codigo: "msshi220",
    precio: 990000,
    stock: 2,
    marca: "Shindaiwa",
    especificaciones: {
      potencia: "42cc",
      espada: "18 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 48,
    nombre: "Motosierra Stilh",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSSTI291.png",
    codigo: "mssti291",
    precio: 2100000,
    stock: 1,
    marca: "Stilh",
    especificaciones: {
      potencia: "50cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 49,
    nombre: "Motosierra Toyama",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSTOY520.png",
    codigo: "mstoy520",
    precio: 680000,
    stock: 6,
    marca: "Toyama",
    especificaciones: {
      potencia: "52cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "pesado"
    }
  },
  {
    id: 50,
    nombre: "Motosierra Trupper",
    categoria: "motosierras",
    imagen: "categorias/motosierras/MSTRU540.png",
    codigo: "mstru540",
    precio: 750000,
    stock: 10,
    marca: "Trupper",
    especificaciones: {
      potencia: "54cc",
      espada: "20 pulgadas",
      motor: "2 tiempos", 
      trabajo: "liviano"
    }
  }
];

function initializeLocalStorage() {
  if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(initialProducts));
  }
}
function getProducts() {
  return JSON.parse(localStorage.getItem('productos')) || [];
}

function saveProducts(products) {
  localStorage.setItem('productos', JSON.stringify(products));
}

function getCategories() {
  const products = getProducts();
  const categories = [...new Set(products.map(product => product.categoria))];
  return categories;
}

initializeLocalStorage();