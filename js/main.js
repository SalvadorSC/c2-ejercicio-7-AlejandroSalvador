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

const equiposProvincia = (equipos) => {
  equipos.filter(({ equipos: { provincia } }) => provincia);
  return equipos;
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
