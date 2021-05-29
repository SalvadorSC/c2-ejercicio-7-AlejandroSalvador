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

const puestos = (equipo) => {
  const nPuestos = equipo.filter(
    ({
      asignado: {
        empleado: { puesto },
      },
    }) => puesto === nPuestos
  );
  return nPuestos;
};
