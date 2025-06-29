/**
 * Module: macros
 * Description: a module that handles all things relating to calories
 */

const CALORIES_PER_GRAM_OF_FAT: number = 9.0;
const CALORIES_PER_GRAM_OF_CARBS: number = 4.0;
const CALORIES_PER_GRAM_OF_PROTEIN: number = 4.0;

export class Macros {
    /// The amount of fat in grams
    private fat: number = 0.0;

    /// The amount of protein in grams
    private protein: number = 0.0;

    /// The amount of carbs in grams
    private carbs: number = 0.0;

    /// Create a constructor for easier value initialisation.
    constructor(fat: number, protein: number, carbs: number) {
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
    }

    /// Determine how many calories are in this set of macros
    public getCalories(): number {
        // determine calories in the fat
        const fat_calories = this.fat * CALORIES_PER_GRAM_OF_FAT;

        // determine the calories in the carbs
        const carb_calories = this.carbs * CALORIES_PER_GRAM_OF_CARBS;

        // determine the calories in the protein
        const protein_calories = this.protein * CALORIES_PER_GRAM_OF_PROTEIN;

        // return the sum of all of the calories
        return fat_calories + carb_calories + protein_calories;
    }

    /// Update the fat value
    public setFat(value: number) {
        this.fat = value;
    }

    /// Update the carbs value
    public setCarbs(value: number) {
        this.carbs = value;
    }

    /// Update the protein value
    public setProtein(value: number) {
        this.protein = value;
    }
}