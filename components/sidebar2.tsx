import { changeColor } from "@/utils/sketchfab";
import React, { useState } from "react";

const Sidebar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    muestra: "#000000", // Color por defecto
    color3d: "#000000", // Color por defecto
  });

  const [colores, setColores] = useState<any>([]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleColorChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const color = {
      r: parseInt(value.slice(1, 3), 16),
      g: parseInt(value.slice(3, 5), 16),
      b: parseInt(value.slice(5, 7), 16),
    };
    updateColor("", color.r, color.g, color.b);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const nuevoColor = {
      name: formData.nombre,
      muestra: {
        r: parseInt(formData.muestra.slice(1, 3), 16),
        g: parseInt(formData.muestra.slice(3, 5), 16),
        b: parseInt(formData.muestra.slice(5, 7), 16),
      },
      color3d: {
        r: parseInt(formData.color3d.slice(1, 3), 16),
        g: parseInt(formData.color3d.slice(3, 5), 16),
        b: parseInt(formData.color3d.slice(5, 7), 16),
      },
    };

    setColores([...colores, nuevoColor]);
    setFormData({
      nombre: "",
      muestra: "#000000",
      color3d: "#000000",
    });
  };
  const colors = [
    { name: "white", r: 255, g: 247, b: 232 },
    { name: "black", r: 0, g: 0, b: 0 },
    { name: "green", r: 25, g: 61, b: 50 },
    { name: "red", r: 83, g: 32, b: 44 },
  ];

  const updateColor = async (name: string, r: number, g: number, b: number) => {
    changeColor("pared_1.002", { r, g, b });
  };

  const eliminar = (color: any) => {
    let nuevosColores = colores.filter((c: any) => {
      return c !== color;
    });
    setColores(nuevosColores);
  };

  return (
    <>
      <aside className="p-4">
        <h2>Agregá un color</h2>
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div>
            <div>Nombre del Color</div>
            <input
              placeholder="Nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Color segun muestrario</div>
            <input
              placeholder="Muestra"
              type="color"
              className="h-10"
              name="muestra"
              value={formData.muestra}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Color 3d</div>
            <input
              placeholder="3D"
              type="color"
              className="h-10"
              name="color3d"
              value={formData.color3d}
              onChange={handleColorChange}
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-slate-600 rounded-md text-center text-white"
          >
            Agregar
          </button>
        </form>

        <h2 className="font-bold text-2xl mt-10">Lista de colores</h2>
        <table className="w-full">
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Muestra</td>
              <td>3D</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {colores.map((c: any, index: number) => {
              return (
                <>
                  <tr>
                    <td>{c.name}</td>
                    <td>
                      {c.muestra.r},{c.muestra.g},{c.muestra.b}
                    </td>
                    <td>
                      {c.color3d.r},{c.color3d.g},{c.color3d.b}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          eliminar(c);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </aside>
    </>
  );
};

export default Sidebar;
