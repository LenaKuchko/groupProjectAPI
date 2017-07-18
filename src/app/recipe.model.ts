export class Recipe {
  ingredients: string[] = [];
  constructor(public name: string,
              public calories: number,
              public carbs: number,
              public fat: number,
              public protein: number){}
}
//
