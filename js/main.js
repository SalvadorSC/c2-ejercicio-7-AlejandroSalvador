const equiposMayoresEdad = (equipos) => {
  equipos.filter(({ equipos: { edad } }) => edad);
  return equipos;
};

const equiposProvincia = (equipos) => {
  equipos.filter(({ equipos: { provincia } }) => provincia);
  return equipos;
};
