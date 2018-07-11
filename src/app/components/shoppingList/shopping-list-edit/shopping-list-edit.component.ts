import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from './../../../shared/ingredient.model';

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: string;
  @ViewChild("amountInput") amountInput: string;
  ingr: Ingredient[];
  constructor() {}

  ngOnInit() {}

  addNewItem() {
    this.ingr.push({ name: this.nameInput, amount: this.amountInput });
  }
}
