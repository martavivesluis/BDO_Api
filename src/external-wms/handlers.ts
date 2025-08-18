import { http, HttpResponse } from "msw";
import mockInventory from "./mock-inventory.json";

export const handlers = [
  http.get("https://external-wms/api/inventory", () => {
    return HttpResponse.json(mockInventory);
  }),
];
