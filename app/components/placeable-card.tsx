import type { Placeable } from "@/domain/models/placeable";

interface PlaceableCardProps {
  placeable: Placeable;
}

export default function PlaceableCard({ placeable }: PlaceableCardProps) {
  return <div className="bg-background rounded-lg p-4">{placeable.name}</div>;
}
