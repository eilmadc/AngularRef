import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  Pokemons:any = [];

  constructor(
    private PokeService: PokeAPIService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.PokeService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      this.Pokemons = pokemons;
    })
  }

  showPoke(id: any){
    this.router.navigateByUrl(`pokemons/${id}`);
    console.log(id);
  }
}
