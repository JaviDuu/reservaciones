import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

//Informacion de las reservaciones
  private vuelo:Vuelo[] = [
    {
      fecha_de_vuelo: "Lunes 19 de dic.",
      horario_de_salida_llegada: "2:59 pm/ 7:42 pm",
      origen_Destino: "Mexico",
      vuelo:"492",
      img: "assets/img/mex.jpg",
    },
    {
      fecha_de_vuelo: "Jueves 6 de jul.",
      horario_de_salida_llegada: "4:20 pm/ 7:00 am",
      origen_Destino: "España",
      vuelo:"630",
      img: "assets/img/esp.jpg",
    },
    {
      fecha_de_vuelo: "Lunes 25 de sep.",
      horario_de_salida_llegada: "8:22 am/ 11:40 pm",
      origen_Destino: "Paris",
      vuelo:"13",
      img:"assets/img/par.jpg",
    },
    {
      fecha_de_vuelo: "Miércoles 14 de feb. 24",
      horario_de_salida_llegada: "1:20 am/ 3:00 am",
      origen_Destino: "Japon",
      vuelo:"2141",
    img:"assets/img/jap.jpg",
    },
    {
      fecha_de_vuelo: "Lunes 24 de jul.",
      horario_de_salida_llegada: "10:30 am/ 5:am",
      origen_Destino: "Corea",
      vuelo:"130",
      img: "assets/img/cor.jpg",
    },


  ];

  constructor() {
    console.log("listo para usarse");
   }
   getVuelo(): Vuelo[]{
    return this.vuelo;
   }
}

//Arreglo
export interface Vuelo{
  fecha_de_vuelo:string;
  horario_de_salida_llegada:string;
  origen_Destino:string;
  vuelo:string;
  img:string,

}
