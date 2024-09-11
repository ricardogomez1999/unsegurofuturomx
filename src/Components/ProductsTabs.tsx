import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { services } from "../data";
import Card from "./Card";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function ProductsTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [1, 2, 3, 4, 5, 6];

  const nextTab = () => setSelectedIndex((selectedIndex + 1) % tabs.length);
  const prevTab = () =>
    setSelectedIndex((selectedIndex - 1 + tabs.length) % tabs.length);
  return (
    <div className="md:hidden">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="hidden">
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {services.map((service) => (
            <Tab.Panel key={service.title}>
              <Card service={service} />
            </Tab.Panel>
          ))}
        </TabPanels>
      </TabGroup>
      <div className="mt-4 text-center">
        <button onClick={prevTab} className="mr-2">
          <ChevronLeftIcon className=" w-10 h-10 text-blue-900" />
        </button>
        <button onClick={nextTab}>
          <ChevronRightIcon className=" w-10 h-10 text-blue-900" />
        </button>
      </div>
    </div>
  );
}
