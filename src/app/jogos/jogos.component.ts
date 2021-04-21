import { Component, OnInit } from '@angular/core';
import { Jogo } from '../model/Jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogo : Jogo = {
    name: "Rainbow Six Siege",
    gender: "FPS",
    price: 120
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
