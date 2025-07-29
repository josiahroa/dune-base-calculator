import type { Placeable } from "./placeable";

export interface FunctionalUnit extends Placeable {
  power: number;
  powerType: string;
}
