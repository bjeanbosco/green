// types.ts
export interface NewsEvent {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  slug: string;
  type: "news",
}

export interface Event {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  slug: string;
  moreImages: string[];
  type: "event",
}

export type CombinedData = NewsEvent | Event;
