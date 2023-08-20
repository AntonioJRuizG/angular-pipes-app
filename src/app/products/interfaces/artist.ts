export interface Artist {
  name: string;
  country: string;
  time: string;
  style: Style;
  isAlive: boolean;
}

// Keep ascending order
export enum Style {
  abstract,
  impressionism,
  minimal,
  modernism,
  performance,
  sculptor,
}
