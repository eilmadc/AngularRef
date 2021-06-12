import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.css']
})
export class PokeDescriptionComponent implements OnInit {
 
  //Peticion a un solo elemento 
  Pokemon:any = [];
  
  //Constructor
  constructor(
    private routeActive:ActivatedRoute,
    private PokeService: PokeAPIService
   ) {
      
    }

  //NGONINIT
  ngOnInit(): void {
    
    const id: any = this.routeActive.snapshot.paramMap.get('id');
    
    this.PokeService.getPokemon(id).subscribe(data =>{
      this.Pokemon = data;
      console.log(this.Pokemon);
    })
    
    console.log(id);
  }

}
