import { cn } from "@/lib/utils";

export function Tab({
  tabName,
  selectedTab,
  onTabChange,
}: {
  tabName: string;
  selectedTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div
      onClick={() => onTabChange(tabName)}
      className={cn(
        "cursor-pointer w-1/4 flex justify-center items-center rounded py-2",
        selectedTab === tabName && "bg-secondary"
      )}
    >
      <h3
        className={cn(
          "text-foreground",
          selectedTab === tabName ? "text-muted" : ""
        )}
      >
        {tabName}
      </h3>
    </div>
  );
}
