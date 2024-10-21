export interface ContactInfo {
  get id(): number;
  get title(): string;
  get address(): string;
  get openHours(): string;
  get deliveryHours(): string;
}
