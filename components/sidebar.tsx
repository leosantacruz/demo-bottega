import { changeColor } from "@/utils/sketchfab";

const Sidebar = () => {
  const colors = [
    { name: "white", r: 255, g: 247, b: 232 },
    { name: "black", r: 0, g: 0, b: 0 },
    { name: "green", r: 25, g: 61, b: 50 },
    { name: "red", r: 83, g: 32, b: 44 },
  ];

  const updateColor = async (name: string, r: number, g: number, b: number) => {
    changeColor("pared_1.002", { r, g, b });
  };

  return (
    <>
      <aside className="flex flex-col text-left p-10 ">
        <div className="mt-10 opacity-60">Revestimiento acrílico texturado</div>
        <h1 className="text-4xl mb-10 text-[#19355e]">
          Revestimiento texturado Extra Fino
        </h1>

        <h2 className="text-2xl mt-5 text-[#19355e]">3500 €</h2>

        <p className="mt-10 text-lg">
          Revestimiento acrílico texturado de terminación lisa, que lo hace
          especialmente atractivo para interiores. Por sus características
          requiere que el revoque se encuentre bien nivelado. Es de alto
          rendimiento pues carga un espesor reducido
        </p>
        <a href="https://ibisdev.tech/" className="block underline text-md">
          <strong className="text-[#00bf9e]">Leer mas</strong>
        </a>

        <p className="text-lg mt-10">
          Colores disponibles
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
            Saber mas
          </button>
          <button className="p-3 mt-5 bg-[#19355e] text-white border border-2 border-solid border-[#19355e]">
            Consultar disponibilidad
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
