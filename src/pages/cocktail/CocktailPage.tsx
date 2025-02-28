import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectorCocktailsDataSource,
  selectorCocktailsIsLoading,
} from "@/store/slices/cocktail.slice.ts";
import { useEffect } from "react";
import { getCocktail } from "@/store/slices/cocktail.actions.ts";
import { Drink } from "@/types/cocktail/type.ts";
import { DrinkItem } from "@/pages/cocktail/components/Drink/Drink.tsx";

import './index.scss';

export function CocktailPage() {
  const dispatch = useAppDispatch();
  const params = useParams<{ cocktail: string }>();
  const cocktails = useAppSelector(selectorCocktailsDataSource);
  const isLoading = useAppSelector(selectorCocktailsIsLoading);

  useEffect(() => {
    if (params.cocktail && !cocktails[params.cocktail]) {
      dispatch(getCocktail(params.cocktail));
    }
  }, [params.cocktail]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="drink-list">
      {params.cocktail &&
        cocktails[params.cocktail]?.drinks?.map((drink: Drink) => (
          <DrinkItem key={drink.idDrink} drink={drink} />
        ))}
    </div>
  );
}
