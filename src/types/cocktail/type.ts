type StringOrNull = string | null;

enum InstructionTypes {
  DE = "DE",
  ES = "ES",
  FR = "FR",
  IT = "IT",
  ZH_HANS = "ZH-HANS",
  ZH_HANT = "ZH-HANT",
}

type Ingredient = `strIngredient${number}`;
type Instruction = `strInstructions${InstructionTypes}`;
type Measure = `strMeasure${number}`;

type Ingredients = Record<Ingredient, StringOrNull>;
type Instructions = Record<Instruction, StringOrNull>;
type Measures = Record<Measure, StringOrNull>;
type CreativeCommonsConfirmedType = "Yes" | "No";

export type Drink = Ingredients &
  Instructions &
  Measures & {
    dateModified: string;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: CreativeCommonsConfirmedType;
    strDrink: string;
    strDrinkAlternate: StringOrNull;
    strDrinkThumb: StringOrNull;
    strGlass: StringOrNull;
    strIBA: StringOrNull;
    strImageAttribution: StringOrNull;
    strInstructions: string;
    strTags: string;
    strVideo: StringOrNull;
  };

export type CocktailResponse = {
  drinks: Drink[];
};
