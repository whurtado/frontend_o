/**
* helper.service.ts
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NumericService {
  /**
  * Sharing the message between components
  * @var {Object} message
  */
  //private message = new BehaviorSubject<string>('En espera de un nombre');
  private message = new BehaviorSubject<string>('');

  /**
  * The custom message to set
  * @var {string} customMessage
  */
  public customMessage = this.message.asObservable();
  constructor() { }
  /**
  * Change the message between components
  * @function changeMessage
  *  @function changeMessage_new
  * @param {string} msg
  * @return {void}
  */
  public changeMessage(msg): void {
    //this.message.next(msg);
    if(msg != undefined){

      //console.log("valor_pagar",this.camposNumerico(msg.valor_pagar));
        this.message.next(this.camposNumerico(msg.valor_pagar));

        return this.camposNumerico(msg.valor_pagar);

        console.log("valor_pagar",this.camposNumerico(msg.valor_pagar));

    }

  }

  public changeMessage_new(msg): void {

    //retorna el valor con el separador numerico
    if(msg != undefined){
      console.log("valor_pagar zzz",msg);

        return this.camposNumerico(msg.valor_pagar);
    }

  }

  camposNumerico( valor:any) {
    /*funcion encargada de colocarle separadores de miles a los campos que son de tipo double */


     
         var num = valor.replace(/\./g,'');
         if(!isNaN(num)){
             //coloca los separadores de miles a los numeros ingresados
             num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
             num = num.split('').reverse().join('').replace(/^[\.]/,'');
             return num;
         }
         else{ // si el datos ingresado no es un numero lo elimina
            let num1 = valor.replace(/[^\d\.]*/g,'');
             return num1;
         }
    }
}