import { useState } from "react";

export default function useTabState(initialTab = 1) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return { activeTab, setActiveTab };
}
