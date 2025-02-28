import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountriesItemRequest } from "@/api/requests/cocktails/getCocktailBySlugRequest.ts";

export const getCocktail = createAsyncThunk(
  "cocktail",
  async (cocktail: string, { rejectWithValue }) => {
    try {
      const response = await getCountriesItemRequest(cocktail);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
