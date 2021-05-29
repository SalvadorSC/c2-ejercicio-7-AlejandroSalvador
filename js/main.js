const equiposMayoresEdad = (equipo, nEdad) => {
  const mayoresNEdad = equipo.filter(
    ({
      asignado: {
        empleado: { edad },
      },
    }) => edad >= nEdad
  );
  return mayoresNEdad;
};

const equiposProvincia = (equipo) => {
  const nEquiposProvincia = equipo.filter(
    ({ asignado: { provincia } }) => provincia === "Tarragona"
  );
  return nEquiposProvincia;
};

const provincias = (equipo) => {
  const provinciasConEquipos = [];
  equipo.map(({ asignado: { provincia } }) => {
    const encontrado = provinciasConEquipos.find(
      (provinciaEnArray) => provinciaEnArray === provincia
    );

    if (!encontrado) {
      console.log(provinciasConEquipos);
      provinciasConEquipos.push(provincia);
    }
    return provinciasConEquipos;
  });
  return provinciasConEquipos;
};

const puestos = (equipo) => {
  const puestosConEquipos = [];
  equipo.map(
    ({
      asignado: {
        empleado: { puesto },
      },
    }) => {
      const buscar = puestosConEquipos.find(
        (arrayPuestos) => arrayPuestos === puesto
      );

      if (!buscar) {
        console.log(puestosConEquipos);
        puestosConEquipos.push(puesto);
      }
      return puestosConEquipos;
    }
  );
  return puestosConEquipos;
};
