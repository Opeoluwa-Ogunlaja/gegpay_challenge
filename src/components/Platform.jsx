import React from "react";
import { PlatformElement } from "./PlatformElement";

const platforms = [
  {
    title: "Book Bazaar",
    color: 'hsla(240, 54%, 62%, 1)',
    width: 245,
    value: 2500000,
    increase: 15
  },
  {
    title: "Artisan Aisle",
    color: 'hsla(195, 75%, 63%, 1)',
    value: 1800000,
    width: 204.31313,
    increase: 10
  },
  {
    title: "Toy Troop",
    color: 'hsla(36, 100%, 65%, 1)',
    value: 1200000,
    width: 122.13131,
    increase: 8
  },
  {
    title: "XStore",
    color: 'hsla(356, 100%, 65%, 1)',
    value: 1000000,
    width: 122.13131,
    increase: 5
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
