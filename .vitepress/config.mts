import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Curso NestJS",
  description: "Documentación y repositorio del curso de NestJS",
  base: '/curso_nestjs/',
  themeConfig: {
    logo: '/nestjs.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Evaluaciones', link: '/evaluaciones' },
      { text: 'Repositorios', link: '/repositorios' },
      { text: 'Ayuda Memoria', link: 'https://xixay.github.io/ayuda-memoria/' }
    ],

    sidebar: [
      {
        text: 'Evaluaciones',
        items: [
          { text: 'Tarea 01', link: 'https://github.com/xixay/curso_nestjs_tarea1' },
          { text: 'Cuestionarios', link: 'https://github.com/xixay/curso_nestjs_cuestionarios' }
        ]
      },
      {
        text: 'Repositorios',
        items: [
          { text: 'Backend', link: '/repositorios' },
          { text: 'Frontend', link: '/repositorios' },
          { text: 'Producción', link: '/repositorios' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/curso_nestjs' }
    ]
  }
})
