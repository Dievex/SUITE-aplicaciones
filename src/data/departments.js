const departments = [
  {
    id: 'calidad',
    name: 'Calidad',
    icon: '/icons/departments/calidad.svg',
    color: '#4caf50',
    applications: [
      {
        id: 'app-calidad-1',
        name: 'Poka-Yokes',
        description: 'Sistema de gestión y control de los Poka-Yokes',
        url: 'https://apps.powerapps.com/play/e/default-73caa82e-a2f5-4255-82f3-9f1b7c4208a0/a/bea9032e-6905-4484-9d57-8b3fd20c090b?tenantId=73caa82e-a2f5-4255-82f3-9f1b7c4208a0&hint=2a8df6b0-80b7-4694-b136-86be3dd68ce5&sourcetime=1712574286129&source=portal',
        icon: '/icons/applications/app-calidad-1.svg'
      },
      {
        id: 'app-calidad-2',
        name: 'Identificacion Blizzar-Polar',
        description: 'Identificación de los tubos de tipo Blizzar o Polar con visión artificial',
        url: 'https://auditorias.ejemplo.com',
        icon: '/icons/applications/app-calidad-2.svg'
      }
    ]
  },
  {
    id: 'it',
    name: 'IT',
    icon: '/icons/departments/it.svg',
    color: '#2196f3',
    applications: [
      {
        id: 'app-it-1',
        name: 'Help Desk',
        description: 'Sistema de tickets para soporte técnico',
        url: 'https://apps.powerapps.com/play/e/default-73caa82e-a2f5-4255-82f3-9f1b7c4208a0/a/6be6969f-4b36-4cbd-b27c-3befc6b5b69c?tenantId=73caa82e-a2f5-4255-82f3-9f1b7c4208a0&sourcetime=1734076759206&source=portal#',
        icon: '/icons/applications/app-it-1.svg'
      },
      {
        id: 'app-it-2',
        name: 'Inventario de activos',
        description: 'Sistema de gestión de activos',
        url: 'https://monitoreo.ejemplo.com',
        icon: '/icons/applications/app-it-2.svg'
      }
    ]
  },
  {
    id: 'logistica',
    name: 'Logística',
    icon: '/icons/departments/logistica.svg',
    color: '#ff9800',
    applications: [
      {
        id: 'app-logistica-1',
        name: 'Horum CRM',
        description: 'Sistema de gestión de clientes y ventas',
        url: 'http://192.168.100.35:5002',
        icon: '/icons/applications/app-logistica-1.svg'
      },
      {
        id: 'app-logistica-2',
        name: 'Almacen Borygo',
        description: 'Tracking de inventario y seguimiento de botellas',
        url: 'https://tracking.ejemplo.com',
        icon: '/icons/applications/app-logistica-2.svg'
      }
    ]
  },
  {
    id: 'finanzas',
    name: 'Finanzas',
    icon: '/icons/departments/finanzas.svg',
    color: '#9c27b0',
    applications: [
      {
        id: 'app-finanzas-1',
        name: 'OCR facturas',
        description: 'Sistema de reconocimiento óptico de caracteres para facturas',
        url: 'https://contabilidad.ejemplo.com',
        icon: '/icons/applications/app-finanzas-1.svg'
      },
      {
        id: 'app-finanzas-2',
        name: 'Canal de denuncias',
        description: 'Sistema de seguimiento y gestión de denuncias',
        url: 'https://ntbees.ddns.net:8081/',
        icon: '/icons/applications/app-finanzas-2.svg'
      }
    ]
  },
  {
    id: 'ingenieria',
    name: 'Ingeniería',
    icon: '/icons/departments/ingenieria.svg',
    color: '#f44336',
    applications: [
      {
        id: 'app-ingenieria-1',
        name: 'Cronometro de parada de maquinas',
        description: 'Herramienta para el seguimiento de tiempos de parada de maquinas',
        url: 'http://192.168.103.140:5000/',
        icon: '/icons/applications/app-ingenieria-1.svg'
      },
      {
        id: 'app-ingenieria-2',
        name: 'Kanban',
        description: 'Sistema de gestión de ordenes de trabajo',
        url: 'https://apps.powerapps.com/play/e/default-73caa82e-a2f5-4255-82f3-9f1b7c4208a0/a/c51e6ee8-7eed-4a74-978e-dc225b4ea149?tenantId=73caa82e-a2f5-4255-82f3-9f1b7c4208a0&source=portal',
        icon: '/icons/applications/app-ingenieria-2.svg'
      },
      {
        id: 'app-ingenieria-3',
        name: 'MES',
        description: 'Sistema de gestión de la producción',
        url: 'https://emi.maflow.es:7080/',
        icon: '/icons/applications/app-ingenieria-3.svg'
      },
      {
        id: 'app-ingenieria-4',
        name: 'Gestor documental',
        description: 'Sistema de gestión de los documentos de la empresa',
        url: 'http://192.168.100.23:8080/MAFLOW/publico/lineaspublica.aspx',
        icon: '/icons/applications/app-ingenieria-3.svg'
      }
    ]
  }
];

export default departments;