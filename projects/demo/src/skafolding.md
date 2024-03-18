# Skafolding in Angular

App folder content.

- app.component.html / app.component.ts / app.component.scss / app.component.spec.ts
- app.module.ts / app.router.ts

### Types distribution _(This is a good organization for small projects)_:

- Components
- Services
- Models
- Pipes
- Interfaces
- Enums

### _(This is a good organization for bigger projects)_:

- Core _(central for the app without graphic representation)_
  - Services
  - Models
  - Pipes
  - Directives
- Share _(share in the app, has a graphic representation)_
  - Shared components (layout, structure)
- Features _(characteristics of the app)_
  - Home
  - About
  - Contacts
  - Etc
