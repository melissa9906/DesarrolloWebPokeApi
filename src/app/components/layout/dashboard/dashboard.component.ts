import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemon: any;
  pokemons!: any [];
  pokemonName:string = "";
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons('');
    this.init();
  }
  getName(event: any){
    console.log("Padre",event);
    this.init(event);
  }

  async getPokemons(pokemons:any){
  this.pokemons = pokemons;
  //console.log(pokemons);
  }
  

  init(pokemonData:string = "squirtle"){
    this.pokemonService
    .getPokemonByName(pokemonData.toLowerCase())
    .then((response) => {
      this.pokemon = response;
      this.pokemonName = "";
    }).catch((error: any) => {
      console.log(error);
    });
  }
  
  

}
