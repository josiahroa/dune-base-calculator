import type { Placeable } from "../models/placeable";
import type { FunctionalUnit } from "../models/functional-unit";
import type { WaterGenerator } from "../models/water-generator";

export const enum Category {
  Utilities = "Utilities",
  Fabricators = "Fabricators",
  Refineries = "Refineries",
  Storage = "Storage",
}

export const enum PowerType {
  USE = "USE",
  GENERATE = "GENERATE",
}

export const SubFiefConsole: FunctionalUnit = {
  name: "Sub-Fief Console",
  power: 15,
  powerType: PowerType.USE,
  materials: [],
};

export const AdvancedSubFiefConsole: FunctionalUnit = {
  name: "Advanced Sub-Fief Console",
  power: 15,
  powerType: PowerType.USE,
  materials: [],
};

export const FuelPoweredGenerator: FunctionalUnit = {
  name: "Fuel-Powered Generator",
  power: 75,
  powerType: PowerType.GENERATE,
  materials: [],
};

export const WindturbineOmniDirectional: FunctionalUnit = {
  name: "Windturbine Omni Directional",
  power: 150,
  powerType: PowerType.GENERATE,
  materials: [],
};

export const WindturbineOmniDirectionalLarge: FunctionalUnit = {
  name: "Windturbine Directional",
  power: 350,
  powerType: PowerType.GENERATE,
  materials: [],
};

export const SpicePoweredGenerator: FunctionalUnit = {
  name: "Spice-Powered Generator",
  power: 1000,
  powerType: PowerType.GENERATE,
  materials: [],
};

export const RepairStation: FunctionalUnit = {
  name: "Repair Station",
  power: 20,
  powerType: PowerType.USE,
  materials: [],
};

export const Recycler: FunctionalUnit = {
  name: "Recycler",
  power: 15,
  powerType: PowerType.USE,
  materials: [],
};

export const PentashieldSurfaceVertical: FunctionalUnit = {
  name: "Pentashield Surface Vertical",
  power: 6,
  powerType: PowerType.USE,
  materials: [],
};

export const PentashieldSurfaceHorizontal: FunctionalUnit = {
  name: "Pentashield Surface Horizontal",
  power: 3,
  powerType: PowerType.USE,
  materials: [],
};

export const Fabricator: FunctionalUnit = {
  name: "Fabricator",
  power: 10,
  powerType: PowerType.USE,
  materials: [],
};

export const GarmentFabricator: FunctionalUnit = {
  name: "Garment Fabricator",
  power: 40,
  powerType: PowerType.USE,
  materials: [],
};

export const AdvancedGarmentFabricator: FunctionalUnit = {
  name: "Advanced Garment Fabricator",
  power: 150,
  powerType: PowerType.USE,
  materials: [],
};

export const SurvivalFabricator: FunctionalUnit = {
  name: "Survival Fabricator",
  power: 40,
  powerType: PowerType.USE,
  materials: [],
};

export const AdvancedSurvivalFabricator: FunctionalUnit = {
  name: "Advanced Survival Fabricator",
  power: 150,
  powerType: PowerType.USE,
  materials: [],
};

export const WeaponsFabricator: FunctionalUnit = {
  name: "Weapons Fabricator",
  power: 40,
  powerType: "USE",
  materials: [],
};

export const AdvancedWeaponsFabricator: FunctionalUnit = {
  name: "Advanced Weapons Fabricator",
  power: 150,
  powerType: "USE",
  materials: [],
};

export const VehiclesFabricator: FunctionalUnit = {
  name: "Vehicles Fabricator",
  power: 40,
  powerType: PowerType.USE,
  materials: [],
};

export const AdvancedVehiclesFabricator: FunctionalUnit = {
  name: "Advanced Vehicles Fabricator",
  power: 150,
  powerType: PowerType.USE,
  materials: [],
};

export const BloodPurifier: FunctionalUnit = {
  name: "Blood Purifier",
  power: 10,
  powerType: PowerType.USE,
  materials: [],
};

export const ImprovedBloodPurifier: FunctionalUnit = {
  name: "Improved Blood Purifier",
  power: 35,
  powerType: PowerType.USE,
  materials: [],
};

export const SmallOreRefinery: FunctionalUnit = {
  name: "Small Ore Refinery",
  power: 15,
  powerType: PowerType.USE,
  materials: [],
};

export const MediumOreRefinery: FunctionalUnit = {
  name: "Medium Ore Refinery",
  power: 45,
  powerType: PowerType.USE,
  materials: [],
};

export const LargeOreRefinery: FunctionalUnit = {
  name: "Large Ore Refinery",
  power: 350,
  powerType: PowerType.USE,
  materials: [],
};

export const SmallChemicalRefinery: FunctionalUnit = {
  name: "Small Chemical Refinery",
  power: 15,
  powerType: PowerType.USE,
  materials: [],
};

export const MediumChemicalRefinery: FunctionalUnit = {
  name: "Medium Chemical Refinery",
  power: 350,
  powerType: PowerType.USE,
  materials: [],
};

export const SpiceRefinery: FunctionalUnit = {
  name: "Spice Refinery",
  power: 200,
  powerType: PowerType.USE,
  materials: [],
};

export const MediumSpiceRefinery: FunctionalUnit = {
  name: "Medium Spice Refinery",
  power: 350,
  powerType: PowerType.USE,
  materials: [],
};

export const LargeSpiceRefinery: FunctionalUnit = {
  name: "Large Spice Refinery",
  power: 500,
  powerType: PowerType.USE,
  materials: [],
};

export const Windtrap: WaterGenerator = {
  name: "Windtrap",
  power: 75,
  powerType: PowerType.USE,
  waterPerHour: 2700,
  materials: [],
};

export const LargeWindtrap: WaterGenerator = {
  name: "Large Windtrap",
  power: 135,
  powerType: PowerType.USE,
  waterPerHour: 5040,
  materials: [],
};

export const FremenDeathstill: WaterGenerator = {
  name: "Fremen Deathstill",
  power: 200,
  powerType: PowerType.USE,
  waterPerHour: 25000,
  materials: [],
};

export const AdvancedFremenDeathstill: WaterGenerator = {
  name: "Advanced Fremen Deathstill",
  power: 350,
  powerType: PowerType.USE,
  waterPerHour: 54000,
  materials: [],
};

export const utilities: Placeable[] = [
  SubFiefConsole,
  AdvancedSubFiefConsole,
  FuelPoweredGenerator,
  WindturbineOmniDirectional,
  WindturbineOmniDirectionalLarge,
  SpicePoweredGenerator,
  RepairStation,
  Recycler,
  PentashieldSurfaceVertical,
  PentashieldSurfaceHorizontal,
  Windtrap,
  LargeWindtrap,
  FremenDeathstill,
  AdvancedFremenDeathstill,
];

export const fabricators: Placeable[] = [
  Fabricator,
  GarmentFabricator,
  AdvancedGarmentFabricator,
  SurvivalFabricator,
  AdvancedSurvivalFabricator,
  WeaponsFabricator,
  AdvancedWeaponsFabricator,
  VehiclesFabricator,
  AdvancedVehiclesFabricator,
];

export const refineries: Placeable[] = [
  BloodPurifier,
  ImprovedBloodPurifier,
  SmallOreRefinery,
  MediumOreRefinery,
  LargeOreRefinery,
  SmallChemicalRefinery,
  MediumChemicalRefinery,
  SpiceRefinery,
  MediumSpiceRefinery,
  LargeSpiceRefinery,
];

export const storage: Placeable[] = [];

export const CategoryMap: Record<Category, Placeable[]> = {
  Utilities: utilities,
  Fabricators: fabricators,
  Refineries: refineries,
  Storage: storage,
};
