import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Introduccion', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/grafo/dijkstra', title: 'Dijkstra', icon: 'ft-map', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/grafo/carrusel', title: 'Imagenes Dijkstra', icon: 'ft-cast', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/universidad/estudiante', title: 'Estudiantes', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
 // {
  //  path: '/universidad/crearestudiante', title: 'Crear Estudiante', icon: 'ft-user-check', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  //},
 // {
   // path: '/universidad/eliminarestudiante', title: 'Eliminar Estudiante', icon: 'ft-user-x', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  //},
  {
    path: '/universidad/profesor', title: 'Profesores', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  //{
  //  path: '/universidad/crearprofesor', title: 'Crear Profesores', icon: 'ft-user-plus', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  //},
 // {
   // path: '/universidad/eliminarprofesor', title: 'Eliminar Profesor', icon: 'ft-user-x', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  //},
  {
    path: '/universidad/materia', title: 'Asignaturas', icon: 'ft-book-open', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  //{
  //  path: '/universidad/crearmateria', title: 'Crear Asignaturas', icon: 'ft-book-open', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
 // },
  //{
   // path: '/universidad/eliminarmateria', title: 'Eliminar Asignaturas', icon: 'ft-x-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  //},
  
  //{
   // path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //submenu: [
      //  { path: '/YOUR-ROUTE-PATH', title: 'Second Level', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //  {
          //  path: '', title: 'Second Level Child', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
          //  submenu: [
            //    { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //    { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          //  ]
       // },
   // ]
//},
];
