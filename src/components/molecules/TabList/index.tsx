import { Tab } from "@/types/types";

interface TabListProps {
  tabs: Tab[];
  activeIndex: string;
  onTabClick: (id: string) => void;
}

export const TabList: React.FC<TabListProps> = ({
  tabs,
  activeIndex,
  onTabClick,
}) => {
  return (
    <ul className="flex justify-center gap-4 bg-secondary px-8 py-4 rounded-lg">
      {tabs.map((tab) => (
        <li key={tab.id} onClick={() => onTabClick(tab.id)}>
          <div
            className={`${
              tab.id === activeIndex
                ? "text-foreground bg-primary rounded-lg px-2 py-1 md:px-4 md:py-2 text-sm lg:text-lg"
                : "text-foreground border border-foreground rounded-lg px-2 py-1 md:px-4 md:py-2 text-sm lg:text-lg"
            } capitalize cursor-pointer`}
          >
            {tab.label}
          </div>
        </li>
      ))}
    </ul>
  );
};
