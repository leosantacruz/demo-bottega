import {
  changeColor,
  emissionAnimation,
  addTexture,
  setTexture,
  setBumpMap,
  getMaterials,
} from "@/utils/sketchfab";

const Sidebar = (props: any) => {
  const emissionHoveranimation = (part: string) => {
    emissionAnimation(part);
  };

  const colors = [
    { name: "white", r: 255, g: 247, b: 232 },
    { name: "black", r: 0, g: 0, b: 0 },
    { name: "green", r: 25, g: 61, b: 50 },
    { name: "red", r: 83, g: 32, b: 44 },
  ];

  console.log({ ccc: props.defaultTextureId });

  const updateColor = async (name: string, r: number, g: number, b: number) => {
    //let textureUID = "";
    let bumpMapUID = props.defaultTextureId;

    if (name == "green") {
      bumpMapUID = await addTexture("https://i.imgur.com/Tn2UYDu.jpg");
      //textureUID = await addTexture("https://i.imgur.com/wHFrCPy.jpg");
    }
    //setTexture("Leather_001", textureUID);
    console.log(bumpMapUID);
    setBumpMap("Leather_001", bumpMapUID);
    changeColor("Leather_001", { r, g, b });
    changeColor("Leather_002", { r, g, b });
  };

  return (
    <>
      <aside className="flex flex-col text-left p-10 ">
        <div className="mt-10 opacity-60">Women's bag</div>
        <h1 className="text-4xl mb-10 text-[#19355e]">Sardine</h1>

        <h2 className="text-2xl mt-5 text-[#19355e]">3500 €</h2>

        <p className="mt-10 text-lg">
          Bag made from supple lambskin leather using Intrecciato Craftsmanship
          featuring sculptural
        </p>
        <a href="https://ibisdev.tech/" className="block underline text-md">
          <strong className="text-[#00bf9e]">Read more</strong>
        </a>

        <p className="text-lg mt-10">
          Available colors
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
          <button className="p-3 border border-2 border-solid border-[#19355e]">
            Add to cart
          </button>
          <button className="p-3 mt-5 bg-[#19355e] text-white border border-2 border-solid border-[#19355e]">
            Check in-store availability
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
