"use client";
import { useTheme } from "@/components/theme-provider";

import ImageCarousel from "@/components/imagecarousel";

export default function ClientRoute() {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>;
    </div>
  );
}
