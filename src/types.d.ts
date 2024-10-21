export interface DishInfo {
  get id(): number;
  get title(): string;
  get description(): string;
  get price(): number;
  get imgUrl(): string | null;
}

export interface ContactInfo {
  get id(): number;
  get title(): string;
  get address(): string;
  get openHours(): string;
  get deliveryHours(): string;
}

export interface CartItemInfo {
  get dish(): DishInfo;
  get qty(): number;
}
