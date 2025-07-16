// Definir materias con sus requisitos previos
const materias = {
  "Calculo I": [],
  "Geometría Analítica y Vectores": [],
  "Álgebra": [],
  "Dibujo Técnico": [],
  "Química": [],
  "Previsión y Seguridad en el Trabajo": [],
  "Calculo II": ["Calculo I"],
  "Física I": [],
  "Física II": [],
  "Diseño Asistido por Computadora": [],
  "Algoritmo": [],
  "Electrotecnia I": [],
  "Calculo III": ["Calculo II"],
  "Calculo IV": ["Calculo II"],
  "Física III": ["Física II"],
  "Programación": [],
  "Resistencia de Materiales": [],
  "Circuitos Eléctricos I": [],
  "Electrotecnia II": ["Electrotecnia I"],
  "Calculo V": ["Calculo IV"],
  "Física IV": ["Física III"],
  "Física V": ["Física III"],
  "Electrónica I": [],
  "Circuitos Eléctricos II": ["Circuitos Eléctricos I"],
  "Probabilidad y Estadística": [],
  "Calculo VI": ["Calculo V"],
  "Física VI": ["Física V"],
  "Electrónica II": ["Electrónica I"],
  "Electrónica Digital": [],
  "Conversión de Energía Eléctrica I": [],
  "Instalaciones Eléctricas I": [],
  "Sistemas de Control I": [],
  "Física VII": ["Física VI"],
  "Física VIII": ["Física VI"],
  "Instrumentación Industrial": [],
  "Electrónica de Potencia I": [],
  "Conversión de Energía Eléctrica II": ["Conversión de Energía Eléctrica I"],
  "Instalaciones Eléctricas II": ["Instalaciones Eléctricas I"],
  "Automatización Industrial": [],
  "Distribución de Energía Eléctrica": [],
  "Sistemas de Control II": ["Sistemas de Control I"],
  "Sistemas Digitales I": [],
  "Electrónica de Potencia II": ["Electrónica de Potencia I"],
  "Instalaciones Eléctricas III": ["Instalaciones Eléctricas II"],
  "Sistemas Neumáticos Industriales": [],
  "Sistemas Digitales II": ["Sistemas Digitales I"],
  "Sistemas de Potencia I": [],
  "Líneas de Transmisión": [],
  "Administración y Recursos Humanos": [],
  "Instalación Eléctrica Industrial": [],
  "Mantenimiento Industrial": [],
  "Subestaciones": [],
  "Sistemas de Potencia II": ["Sistemas de Potencia I"],
  "Generación de Energía Eléctrica": [],
  "Protección en Sistemas Eléctricos": [],
  "Normalización y Calidad Industrial": [],
  "Factibilidad de Sistema Eléctrico": [],
  "Medición de la Energía Eléctrica": [],
  "Derecho": [],
  "Economía y Finanzas": [],
  "Emprendedorismo": [],
  "Proyecto de Trabajo de Grado": []
};

// Simulación: materias aprobadas por el usuario
const aprobadas = ["Calculo I", "Calculo II", "Física II", "Electrotecnia I", "Calculo IV", "Física III"];

// Función para verificar si una materia está desbloqueada
function estaDesbloqueada(materia) {
  const requisitos = materias[materia];
  return requisitos.every(req => aprobadas.includes(req));
}

// Mostrar en consola qué materias están desbloqueadas
Object.keys(materias).forEach(materia => {
  if (estaDesbloqueada(materia)) {
    console.log(`✅ ${materia} está desbloqueada`);
  } else {
    console.log(`🔒 ${materia} BLOQUEADA (Requiere: ${materias[materia].join(", ")})`);
  }
});
