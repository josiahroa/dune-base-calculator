import { useState } from "react";
import type { Route } from "./+types/home";
import { Tab } from "@/components/tab";
import { Category, CategoryMap } from "@/domain/constants/placeables";
import PlaceableCard from "@/components/placeable-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>(Category.Utilities);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-row p-4 gap-4 h-screen">
      <div className="w-full">
        <div className="flex flex-col gap-4 h-full">
          <div className="flex flex-row bg-background w-full rounded p-2">
            <Tab
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              tabName={Category.Utilities}
            />
            <Tab
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              tabName={Category.Fabricators}
            />
            <Tab
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              tabName={Category.Refineries}
            />
            <Tab
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
              tabName={Category.Storage}
            />
          </div>

          <div className="bg-background rounded-lg p-4 h-full">
            {CategoryMap[selectedTab as Category].map((item) => (
              <PlaceableCard key={item.name} placeable={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[600px]">
        <div className="bg-background rounded-lg p-4 h-full">
          <h3 className="text-foreground text-2xl font-bold">Build Summary</h3>
        </div>
      </div>
    </div>
  );
}
