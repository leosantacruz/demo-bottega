import {
  changeColor,
  emissionAnimation,
  addTexture,
  setTexture,
  setBumpMap,
} from "@/utils/sketchfab";

interface Props {
  changeScenario: (val: string) => void;
}

const Sidebar = (props: Props) => {
  const emissionHoveranimation = (part: string) => {
    emissionAnimation(part);
  };

  const colors = [
    { name: "white", r: 255, g: 247, b: 232 },
    { name: "black", r: 0, g: 0, b: 0 },
    { name: "green", r: 25, g: 61, b: 50 },
    { name: "red", r: 83, g: 32, b: 44 },
  ];

  const updateColor = async (name: string, r: number, g: number, b: number) => {
    let textureUID = "";

    let bumpMapUID = "35a4a84d4a504f9eb94d2b89ce4e7e8f";
    if (name == "green") {
      bumpMapUID = await addTexture("https://i.imgur.com/Tn2UYDu.jpg");
      //textureUID = await addTexture("https://i.imgur.com/wHFrCPy.jpg");
    }
    //setTexture("Leather_001", textureUID);
    setBumpMap("Leather_001", bumpMapUID);
    changeColor("Leather_001", { r, g, b });
    changeColor("Leather_002", { r, g, b });
  };

  return (
    <>
      <aside className="flex flex-col text-left p-10 ">
        <h1 className="text-4xl mt-10">Sardine</h1>

        <h2 className="text-2xl mt-3">3500 €</h2>

        <p className="my-10 text-xl">
          Bag made from supple lambskin leather using Intrecciato Craftsmanship
          featuring sculptural Read more
        </p>

        <p className="font-bold text-xl">
          Colors:
          <div className="flex flex-wrap gap-5 my-4">
            {colors.map(({ name, r, g, b }) => {
              return (
                <div
                  onClick={() => {
                    updateColor(name, r, g, b);
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
