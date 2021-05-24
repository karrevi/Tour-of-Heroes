import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectdHero: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectdHero = hero;
  }
}
