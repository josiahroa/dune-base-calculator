# dune-base-calculator

Calculate material and power costs for your base in Dune Awakening.

## Project Goals

Create an application that allows a Dune Awakening player to calculate the materials and power usage for their base. Bases in Dune Awakening need power production, power storage, water production, water storage, utilities, fabricators, and refineries. This calculator will help the player determine all their material, power, and water needs up front.

## Features

- Save and load configurations in the URL

### Functional Units & Storage Selection

A list of possible functional units and storages in Dune Awakening that the player can select from.

- Toggle 'Deep Desert' version which cuts the resource cost for EACH buildable by 50%.
- Shows the name of the buildable
- Shows a picture of the buildable
- Shows the power generated for a power generator
- Shows the power used for a power consumer
- Shows the water capacity for a water storage
- Shows the water production/hr
- Shows the material name and amount needed to make the buildable, changes depending on the 'Deep Desert' toggle
- Provided the player the ability to increase or decrease the amount of each buildable or storage for their base.

### Build Summary

A summary of the selections made by the player for their build.

- Shows all buildables selected
- Shows all the materials needed to make all buildables
- Shows the total Volume of materials needed based on selections made
- Shows the total power generated based on power production selected
- Shows the total power needed or unused based on power production selected

## Domain Reference

### Units

- Volume: Refers to the weight of a material

### Placeables

#### Object Design

- Placeable Name
- Materials[](Material, Count)

Storage extends placeable

- Volume
- Slots

Water storage extends placeable

- ML

Functional Unit extends placeable

- Power
- Power Type

WaterGenerator extends Functional Unit

- Water Per Hour

#### Functional Units (Utilities, Fabricators, and Refineries)

| Unit Name                      | Power | Power Type | Water Per Hour |
| ------------------------------ | ----- | ---------- | -------------- |
| Sub-Fief Console               | 15    | USE        | null           |
| Advanced Sub-Fief Console      | 15    | USE        | null           |
| Fuel-Powered Generator         | 75    | GENERATE   | null           |
| Windturbine Omni Directional   | 150   | GENERATE   | null           |
| Windturbine Directional        | 350   | GENERATE   | null           |
| Spice-Powered Generator        | 1000  | GENERATE   | null           |
| Repair Station                 | 20    | USE        | null           |
| Recycler                       | 15    | USE        | null           |
| Windtrap                       | 75    | USE        | 2700           |
| Large Windtrap                 | 135   | USE        | 5040           |
| Pentashield Surface Vertical   | 6     | USE        | null           |
| Pentashield Surface Horizontal | 3     | USE        | null           |
| Fabricator                     | 10    | USE        | null           |
| Garment Fabricator             | 40    | USE        | null           |
| Advanced Garment Fabricator    | 150   | USE        | null           |
| Survival Fabricator            | 40    | USE        | null           |
| Advanced Survival Fabricator   | 150   | USE        | null           |
| Weapons Fabricator             | 40    | USE        | null           |
| Advanced Weapons Fabricator    | 150   | USE        | null           |
| Vehicles Fabricator            | 40    | USE        | null           |
| Advanced Vehicles Fabricator   | 150   | USE        | null           |
| Blood Purifier                 | 10    | USE        | null           |
| Improved Blood Purifier        | 35    | USE        | null           |
| Small Ore Refinery             | 15    | USE        | null           |
| Medium Ore Refinery            | 45    | USE        | null           |
| Large Ore Refinery             | 350   | USE        | null           |
| Small Chemical Refinery        | 15    | USE        | null           |
| Medium Chemical Refinery       | 350   | USE        | null           |
| Spice Refinery                 | 200   | USE        | null           |
| Medium Spice Refinery          | 350   | USE        | null           |
| Large Spice Refinery           | 500   | USE        | null           |
| Fremen Deathstill              | 200   | USE        | 25000          |
| Advanced Fremen Deathstill     | 350   | USE        | 54000          |

#### Storages

| Unit Name                | Volume | Slots | ML     |
| ------------------------ | ------ | ----- | ------ |
| Small Storage Container  | 250    | 10    | null   |
| Chest                    | 750    | 20    | null   |
| Storage Container        | 1750   | 45    | null   |
| Medium Storage Container | 3500   | 100   | null   |
| Water Cistern            | null   | null  | 5000   |
| Medium Water Cistern     | null   | null  | 25000  |
| Large Water Cistern      | null   | null  | 100000 |

### Materials

| Material Name            |
| ------------------------ |
| Salvaged Metal           |
| Steel Ingot              |
| Cobalt Paste             |
| Calibrated Servok        |
| Duraluminum Ingot        |
| Spice Melange            |
| Plastanium Ingot         |
| Silicone Block           |
| Complex Machinery        |
| Advanced Machinery       |
| Iron Ingot               |
| Copper Ingot             |
| Armor Plating            |
| Thermoelectric Cooler    |
| Military Power Regulator |
| Industrial Pump          |

## Theme

Primary: #151719
Text Primary:
