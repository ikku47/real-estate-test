import React, { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const emirates = [
  { "name": "Dubai", "lat": 25.2767, "lng": 55.3095 },
  { "name": "Abu Dhabi", "lat": 24.4539, "lng": 54.3773 },
  { "name": "Sharjah", "lat": 25.3463, "lng": 55.4209 },
  { "name": "Ajman", "lat": 25.4052, "lng": 55.5136 },
  { "name": "Umm Al Quwain", "lat": 25.5647, "lng": 55.5552 },
  { "name": "Ras Al Khaimah", "lat": 25.7854, "lng": 55.9432 },
  { "name": "Fujairah", "lat": 25.2854, "lng": 56.3565 }
]
;

function GoogleAddressSearch({ selectedAddress, setCoordinates }) {
  // Function to handle selection of an Emirate
  const handleSelectEmirate = (emirate) => {
    selectedAddress({ label: emirate.name });
    setCoordinates(`(${emirate.lat},${emirate.lng})`);
  };

  return (
    <div className="flex items-center w-full">
      <MapPin className="h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-200" />
      <Select
        className="w-full border border-gray-300 rounded-md p-2"
        onValueChange={(selected) =>
          handleSelectEmirate(emirates.find((val) => val.name === selected))
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Search Property Address" />
        </SelectTrigger>
        <SelectContent>
          {emirates?.map(({ name }) => (
            <SelectItem value={name}>
              <h2 className="flex gap-2">{name}</h2>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default GoogleAddressSearch;
