import type { Placeable } from "./placeable";

export interface ItemStorage extends Placeable {
  volume: number;
  slots: number;
}
