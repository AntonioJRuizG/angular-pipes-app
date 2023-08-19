export interface Artist {
  name: string;
  country: string;
  time: string;
  style: Style;
  isAlive: boolean;
}

export enum Style {
  abstract,
  impressionism,
  modernism,
  sculptor,
  minimal,
  performance,
}
