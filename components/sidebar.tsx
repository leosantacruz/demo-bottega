import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import svg64 from "svg64";

//Components
import Scenarios from "@/components/steps/scenarios";
import CustomOptions from "@/components/steps/options";
import SidebarFooter from "@/components/sidebarFooter";

import Cannage from "@/components/cannage";

import {
  changeColor,
  emissionAnimation,
  getCamera,
  setCamera,
} from "@/utils/sketchfab";

interface Props {
  changeScenario: (val: string) => void;
}

const Sidebar = (props: Props) => {
  const [step, setStep] = useState(1);
  const [color, setColor] = useState("");
  const [part, setPart] = useState("Sillon");
  const [cannage, setCannage] = useState("cannage1");

  const emissionHoveranimation = (part: string) => {
    emissionAnimation(part);
  };

  const colors = [
    { name: "Mitchell", r: 235, g: 241, b: 237 },
    { name: "Marcus", r: 0, g: 0, b: 0 },
    { name: "Ryan", r: 237, g: 219, b: 145 },
    { name: "Ada", r: 173, g: 163, b: 237 },
    { name: "Keith", r: 83, g: 32, b: 44 },
  ];

  const updateColor = (r: any, g: any, b: any) => {
    changeColor("Leather_001", { r, g, b });
  };

  const cameras = {
    sillon: {
      position: [2.2477143911378676, 1.033487909245169, 1.5497735381492421],
      target: [0.3512821167041105, 1.4541253606331352, 0.8878835087938001],
    },
    alfombra: {
      position: [1.628295159549282, 0.3583908112864751, 2.0626571609309647],
      target: [0.3512821167041105, 1.4541253606331352, 0.8878835087938001],
    },
    cortinas: {
      position: [0.978001885107671, -0.5000271359434478, 0.8878835087938001],
      target: [0.3512821167041105, 1.4541253606331352, 0.8878835087938001],
    },
  };

  return (
    <>
      <aside className="flex flex-col text-left p-10 ">
        <h1 className="text-4xl mt-10">Sardine</h1>

        <p className="my-10 text-xl">
          Bag made from supple lambskin leather using Intrecciato Craftsmanship
          featuring sculptural Read more
        </p>

        <p className="font-bold text-xl">
          Colors:
          <div className="flex flex-wrap gap-5 my-4">
            {colors.map(({ r, g, b }) => {
              return (
                <div
                  onClick={() => {
                    updateColor(r, g, b);
                  }}
                  className="w-[40px] h-[40px] rounded-full cursor-pointer hover:opacity-70"
                  style={{ backgroundColor: `rgb(${r},${g},${b})` }}
                ></div>
              );
            })}
          </div>
        </p>
        <div className="w-[300px] flex flex-col mt-10">
          <button className="p-3 border border-2 border-solid border-black">
            Add to bag
          </button>
          <button className="p-3 mt-5 bg-black text-white border border-2 border-solid border-black">
            Check in-store availability
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
