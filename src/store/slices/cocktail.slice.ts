import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getCocktail } from "@/store/slices/cocktail.actions.ts";
import { Drink } from "@/types/cocktail/type.ts";

type CocktailSlice = {
  isLoading: boolean;
  dataSource: Record<string, { drinks: Drink[] }>;
};

const initialState: CocktailSlice = {
  isLoading: false,
  dataSource: {},
};

const cocktailsSlice = createSlice({
  name: "cocktails",
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getCocktail.pending, (state) => {
      state.isLoading = true;
    });
    addCase(getCocktail.fulfilled, (state, { payload, meta }) => {
      console.log(payload);
      state.isLoading = false;
      state.dataSource[meta.arg] = payload;
    });
    addCase(getCocktail.rejected, (state) => {
      state.isLoading = false;
    });
  },
  initialState,
});

export const cocktailsReducer = cocktailsSlice.reducer;

export const selectorCocktailsDataSource = ({ cocktails }: RootState) =>
  cocktails.dataSource;
export const selectorCocktailsIsLoading = ({ cocktails }: RootState) =>
  cocktails.isLoading;
