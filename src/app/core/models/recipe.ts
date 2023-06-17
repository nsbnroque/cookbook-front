import { Ingredient } from "./ingredient";
import { User } from "./user";

export interface Recipe {
    Id : number;
    name : string;
    image : string;
    preparationTime : number;
    cookTime : number;
    totalTime : number;
    servings : number;
    directions : Array<string>;
    ingredients : Array<Ingredient>;
    author : User;

}
