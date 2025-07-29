import type { FunctionalUnit } from "./functional-unit";

export interface WaterGenerator extends FunctionalUnit {
  waterPerHour: number;
}
