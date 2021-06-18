import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];

  private dados1: any = [];



  constructor() { }


  guardarDados(index: string , dados: any): boolean{


    if (index) {

       this.dados[index] = dados;

       return true ;
    }
      else{

         return false;
      }


    }


     pegarDados(index: string): any {

      if(index) {

              return this.dados[index];


      }else{


                  return null;
      }
    }
      deletarDados(index: string): boolean{


        return delete this.dados[index];
      }

      guardarDados1(index: string , dados1: any): boolean{


        if (index) {
    
           this.dados1[index] = dados1;
    
           return true ;
        }
          else{
    
             return false;
          }
    
    
        }
    
    
         pegarDados1(index: string): any {
    
          if(index) {
    
                  return this.dados1[index];
    
    
          }else{
    
    
                      return null;
          }
        }
        
    

     }

