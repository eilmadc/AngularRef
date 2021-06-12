import { Injectable } from '@angular/core';
import { PokeAPI } from 'src/environments/PokeAPI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private http:HttpClient
  ) { }

  getPokemons(){
    //Utilizamos estos templates literales para obtener la url :`${PokeAPI.url}/pokemon`
    return this.http.get(`${PokeAPI.url}pokemon`);
  }
}
