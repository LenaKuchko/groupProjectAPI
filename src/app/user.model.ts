export class User {
  allergies: string[] = [];
  dailyNutrition: [
    {"calories", 0},
    {"carbs", 0},
    {"fat", 0},
    {"protein", 0}
  ];
  constructor(public name: string,
              public gender: string,
              public age: number,
              public dietChoice: string,
              public activityLevel: string,
              public height: number,
              public weight: number
  ){}
}
