# Suite de Aplicaciones

Esta aplicación funciona como un punto central para acceder a todas las aplicaciones de la empresa, organizadas por departamentos.

## Características

- Interfaz de usuario intuitiva con carpetas para cada departamento
- Navegación sencilla entre departamentos y aplicaciones
- Diseño responsive adaptado a diferentes dispositivos
- Integración con aplicaciones existentes mediante enlaces

## Departamentos

- Calidad
- IT
- Logística
- Finanzas
- Ingeniería

## Tecnologías utilizadas

- React
- React Router
- Material UI
- Vite

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## Construcción para producción

```bash
npm run build
```

## Personalización

Para añadir o modificar departamentos y aplicaciones, edita el archivo `src/data/departments.js`.