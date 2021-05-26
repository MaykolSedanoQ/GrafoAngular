// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const data={
  urlapigrafo:"http://localhost:8080"
}
export const environment = {
  production: false,
  
  urlListarEstudiantes:`${data.urlapigrafo}/estudiante`,
  urlGuardarEstudiante:`${data.urlapigrafo}/estudiante`,
  urlEliminarEstudiante:`${data.urlapigrafo}/estudiante`,
  urlListarProfesores:`${data.urlapigrafo}/profesor`,
  urlGuardarProfesores:`${data.urlapigrafo}/profesor`,
  urlEliminarProfesores:`${data.urlapigrafo}/profesor`,
  urlListarAsignaturas:`${data.urlapigrafo}/materias`,
  urlCrearAsignaturas:`${data.urlapigrafo}/materias`,
  urlEliminarAsignaturas:`${data.urlapigrafo}/materias`,
  urlAutenticar: `${data.urlapigrafo}/autenticar`
};
