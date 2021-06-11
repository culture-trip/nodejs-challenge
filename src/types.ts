export enum PlaceToStayCategory {
  HOTEL = "Hotel",
  VILLA = "Villa",
  RESORT = "Resort",
  BED_AND_BREAKFAST = "BedAndBreakfast",
  GUESTHOUSE = "Guesthouse",
}

export type PlaceToStay = {
  id: string;
  slug: string;
  title: string;
  description: string;
  address: string;
  starRating?: number;
  category: PlaceToStayCategory;
};

export type S3PlaceToStay = Omit<PlaceToStay, "slug">;
