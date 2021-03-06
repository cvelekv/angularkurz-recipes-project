import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shoppingList.service';
import { Ingredient } from './../../../shared/ingredient.model';

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  // @Output() ingrediantAdded = new EventEmitter<Ingredient>();
  ingr: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addNewItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
