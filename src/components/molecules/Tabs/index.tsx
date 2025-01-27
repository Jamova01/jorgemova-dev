"use client";
import { useState } from "react";
import { TabList } from "../TabList";
import { Tab } from "@/types/types";

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex flex-col w-full">
      <TabList tabs={tabs} activeIndex={activeTab} onTabClick={setActiveTab} />
      <div className="flex px-8 py-10">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
