import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends HttpClientService{
  private endpoint: any;
  constructor(httpClient: HttpClient, router: Router) {
    super(httpClient, router);
    this.urlBase = environment.endpoint.api;
    this.endpoint = environment.endpoint.pokemon;
}

//Nombre de cada pokemon
public getPokemonByName(name: any): Promise<any> {
  const url: string = this.endpoint.nombre;
  return this.get(url.replace('_name_', name));
}

//Id de cada pokemon
public getPokemonById(id : any): Promise<any> {
  const url: string = this.endpoint.id;
  return this.get(url.replace('_id_', id));
}

//Paginador de pokemons
public getPokemonByPage(limit: any, offset:any):Promise<any>{
  const url: string = this.endpoint.pagination;
  return this.get(url.replace('_limit', limit).replace('_offset_',offset));
}

}