import { httpGet } from "@/api/methods/httpGet";

import { AxiosResponse } from "axios";
import { CocktailResponse } from "@/types/cocktail/type.ts";

export function getCountriesItemRequest(
  slug: string,
): Promise<AxiosResponse<CocktailResponse>> {
  return httpGet("/", { params: { s: slug } });
}
