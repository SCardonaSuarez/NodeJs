const empleados = [
  {
    id: 1,
    nombre: "Santiago",
  },
  {
    id: 2,
    nombre: "Carolina",
  },
  {
    id: 3,
    nombre: "Yamile",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id == id)?.nombre;

  return new Promise((resolve, reject) => {
    empleado ? resolve(empleado) : reject(`No exisite empleado con id ${id}`);
  });
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  return new Promise((resolve, reject) => {
    salario ? resolve(salario) : reject(`No existe salario con id${id}`);
  });
};
