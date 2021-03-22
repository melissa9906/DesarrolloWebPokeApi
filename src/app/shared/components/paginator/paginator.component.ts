import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  limit: any;
  offset: any;
  total: any;
  pagineSize = 10;
  
  @Output() pokemons = new EventEmitter<any>();

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.onPageActivated({'pageSize': this.pagineSize, 'pageIndex':0});
  }

  //metodo con el que inicia el paginador
  onPageActivated(event: any){
    this.limit = event.pageSize;
   this.offset = (Number(event.pageIndex)) * Number(event.pageSize);
    this.pokemonService.getPokemonByPage(this.limit,this.offset).then((res) =>{
     this.pokemons.emit(res);
     this.total = res.count;
    }).catch((error: any)=>{
      console.log(error);
    });
  }

}
