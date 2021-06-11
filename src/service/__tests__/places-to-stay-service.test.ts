import { getPlaceToStay, ingestPlacesToStay } from "../places-to-stay-service";

describe("places-to-stay-service", () => {
  describe("getPlaceToStay", () => {
    it("retrieve an item given an id", () => {
      const mockId = "MOCK ID";
      const placeToStay = getPlaceToStay(mockId);

      expect(placeToStay).toBe(false);
      // expect...
    });
  });
});
