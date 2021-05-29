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
