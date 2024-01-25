import React from "react";
import { PlatformElement } from "./PlatformElement";

const platforms = [
  {
    title: "Book Bazaar",
    color: 'purple'
  },
  {
    title: "Artisan Aisle",
    color: 'purple'
  },
  {
    title: "Toy Troop",
    color: 'purple'
  },
  {
    title: "XStore",
    color: 'purple'
  },
];

export const Platform = () => {
  return (
    <section className="platform">
      <div className="flex items-center justify-between">
        <h3 className="section-header font-semibold">Top Platform</h3>
        <a href="/" className="font-regular section-header">
          See All
        </a>
      </div>
      <ul className="platforms flex flex-column gap-xxs">
        {platforms.map((platform) => {
          return <li key={platform.title}>
            <PlatformElement data={platform}/>
          </li>
        })}
      </ul>
    </section>
  );
};
