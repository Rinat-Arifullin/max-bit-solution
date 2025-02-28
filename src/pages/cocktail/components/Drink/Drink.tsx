import { Drink } from "@/types/cocktail/type.ts";

import "./styles.scss";
import { LazyImage } from "@/components/ui/LazyImage/LazyImage.tsx";

type DrinkProps = {
  drink: Drink;
};

export function DrinkItem({ drink }: DrinkProps) {
  return (
    <>
      <div className="drink">
        <div className="description">
          <h1>{drink.strDrink}</h1>
          <h3>{drink.strCategory}</h3>
          <h3>{drink.strGlass}</h3>

          <h3>Instructions:</h3>
          <h3>{drink.strInstructions}</h3>

          <h3>List of ingredients:</h3>
          {Object.entries(drink).map(([key, value]) => {
            if (key.startsWith("strMeasure") && value) {
              return (
                <p key={key}>
                  ${key}: ${value}
                </p>
              );
            }
            return null;
          })}
        </div>
        <div className="image-wrapper">
          {drink.strDrinkThumb && (
            <LazyImage src={drink.strDrinkThumb} alt={drink.strDrink} />
          )}
        </div>
      </div>
      <hr />
    </>
  );
}
