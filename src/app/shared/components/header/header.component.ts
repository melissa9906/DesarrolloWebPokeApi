import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() name = new EventEmitter<any>();
  pokemonName!: string;
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(pokemonName:any){
    this.name.emit(pokemonName);
    this.pokemonName = '';
  }
}
