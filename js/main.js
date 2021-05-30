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

const edadMedia = (equipo) =>
  equipo.reduce(
    (
      acumulador,
      {
        asignado: {
          empleado: { edad },
        },
      }
    ) => edad / equipo.length + acumulador,
    0
  );

const equiposPorEdad = (equipo) => {};

const equiposTipo = (equipo, tipoEquipo) => {
  const equiposDeTipo = [];
  equipo.map((equipo) => {
    let { tipo } = equipo;
    tipo = tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipoEquipo = tipoEquipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipo = tipo.toLowerCase();
    tipoEquipo = tipoEquipo.toLowerCase();
    if (tipo === tipoEquipo) {
      equiposDeTipo.push(equipo);
    }
    return equiposDeTipo;
  });
  return equiposDeTipo;
};

const trabajadoresTipo = equiposTipo;

const equiposPorTipo = (equipo) => {
  const tiposEquipos = [];
  equipo.map(({ tipo }) => {
    const encontrado = tiposEquipos.find((tipoEnArray) => tipoEnArray === tipo);
    if (!encontrado) {
      tiposEquipos.push(tipo);
    }
    return tiposEquipos;
  });
  const equiposOrganizadosPorTipo = [];
  for (const tipo of tiposEquipos) {
    equiposOrganizadosPorTipo.push({ tipo });
    equiposTipo(equipo, tipo);
    console.log(equiposTipo(equipo, tipo));
  }
  for (const tipo in tiposEquipos) {
    const tipoEquipo = equiposTipo(equipo, tiposEquipos[tipo]);
    console.log(tiposEquipos[tipo]);
    console.log(tipoEquipo);
    if (tiposEquipos[tipo] === tipoEquipo[tipo].tipo) {
      console.log(equiposOrganizadosPorTipo[tipo]);
      equiposOrganizadosPorTipo[tipo].equipos = tipoEquipo;
    }
    console.log(equiposOrganizadosPorTipo);
  }
  return equiposOrganizadosPorTipo;
};

const equiposTipoLocalidad = (equipo, tipoEquipo, localidad) => {};

const resumenEquipos = (equipo) => {
  const resumen = [];
  for (const index in equipo) {
    resumen.push({});
  }
  for (const index in equipo) {
    resumen[index].id = equipo[index].id;
    resumen[index].poblacion = equipo[index].asignado.poblacion;
    resumen[index].provincia = equipo[index].asignado.provincia;
  }

  return resumen;
};
