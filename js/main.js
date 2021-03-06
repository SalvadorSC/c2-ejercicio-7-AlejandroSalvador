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

function compare(a, b) {
  if (a.asignado.empleado.edad < b.asignado.empleado.edad) {
    return -1;
  }
  if (a.asignado.empleado.edad > b.asignado.empleado.edad) {
    return 1;
  }
  return 0;
}
const equiposPorEdad = (equipo) => {
  const equiposOrdenadosEdad = [...equipo];
  return equiposOrdenadosEdad.sort(compare);
};

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

const trabajadoresTipo = (equipo, tipoEquipo) => {
  const trabajadoresDeTipo = [];
  equipo.map((equipo) => {
    let { tipo } = equipo;
    tipo = tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipoEquipo = tipoEquipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipo = tipo.toLowerCase();
    tipoEquipo = tipoEquipo.toLowerCase();
    if (tipo === tipoEquipo) {
      trabajadoresDeTipo.push(equipo.asignado.empleado);
    }
    return trabajadoresDeTipo;
  });
  return trabajadoresDeTipo;
};

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
  }
  for (const tipo in tiposEquipos) {
    const tipoEquipo = equiposTipo(equipo, tiposEquipos[tipo]);
    if (tiposEquipos[tipo] === tipoEquipo[tipo].tipo) {
      equiposOrganizadosPorTipo[tipo].equipos = tipoEquipo;
    }
  }
  return equiposOrganizadosPorTipo;
};

const equiposTipoLocalidad = (equipo, tipoEquipo, localidad) => {
  const equiposDeTipoYLocalidad = [];
  equipo.map((equipo) => {
    let { tipo } = equipo;
    let { provincia } = equipo.asignado;
    provincia = provincia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipo = tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipoEquipo = tipoEquipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipo = tipo.toLowerCase();
    provincia = provincia.toLowerCase();
    tipoEquipo = tipoEquipo.toLowerCase();
    if (tipo === tipoEquipo && provincia === localidad) {
      equiposDeTipoYLocalidad.push(equipo);
    }
    return equiposDeTipoYLocalidad;
  });
  return equiposDeTipoYLocalidad;
};

const resumenEquipos = (equipo) => {
  const resumen = [];
  for (const index of equipo) {
    resumen.push({});
  }
  for (const index in equipo) {
    resumen[index].id = equipo[index].id;
    resumen[index].poblacion = equipo[index].asignado.poblacion;
    resumen[index].provincia = equipo[index].asignado.provincia;
  }

  return resumen;
};
