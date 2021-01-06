import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentsService {

  moments: moment[] = [
    {
      persona: 'Carolina',
      momento : 'El comienzo de la Historia',
      descripcion : 'El comienzo de lo que es hasta ahora una de mi mejor historia',
      tipo: 'imagen',
      img: 'assets/img-moments/WhatsApp Image 2020-12-25 at 1.44.11 AM.jpeg',
      fecha: '24-12-2020'
    },

    {
      persona: 'Carolina',
      momento : 'Nuestro Primer beso',
      descripcion : 'Un momento Magico',
      tipo: 'video',
      img: 'assets/img-moments/WhatsApp Video 2020-12-24 at 4.50.17 PM.mp4',
      fecha: '24-12-2020'
    },

    {
      persona: 'Carolina',
      momento : 'La creación de la historia',
      descripcion : '¿Quien diria que ese dia gracias a estar un poco tomado tomaría la valentía de aceptar y decirte todo loo que sentía y siento?, y veo que dios siempre hace las cosas por algo gracias a Dios por ir ese día y hacerle caso a alejandro de tomar porque de no ser por eso quizas no estuviese paando nada de lo que esta sucediendo.',
      tipo: 'imagen',
      img: 'assets/img-moments/22-11-2020.jpeg',
      fecha: '22-11-2020'
    }
  ]

  constructor() { }

  getMoments(){
    return this.moments;
  }

  getMoment(idx:number){
    return this.moments[idx];
  }
}

export interface moment {
  persona: string,
  momento: string,
  tipo: string,
  descripcion: string,
  img: string,
  fecha: string
}
