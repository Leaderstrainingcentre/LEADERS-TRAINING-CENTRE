import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountGroup ?? icon.mdiTable,
    permissions: 'READ_USERS'
  },
  {
    href: '/human_resources/human_resources-list',
    label: 'Human resources',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiAccountGroup' in icon ? icon['mdiAccountGroup' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_HUMAN_RESOURCES'
  },
  {
    href: '/inventory/inventory-list',
    label: 'Inventory',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiWarehouse' in icon ? icon['mdiWarehouse' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_INVENTORY'
  },
  {
    href: '/machinery/machinery-list',
    label: 'Machinery',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiFactory' in icon ? icon['mdiFactory' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_MACHINERY'
  },
  {
    href: '/quality_control/quality_control-list',
    label: 'Quality control',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiCheckCircle' in icon ? icon['mdiCheckCircle' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_QUALITY_CONTROL'
  },
  {
    href: '/raw_materials/raw_materials-list',
    label: 'Raw materials',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiPackageVariant' in icon ? icon['mdiPackageVariant' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_RAW_MATERIALS'
  },
  {
    href: '/suppliers/suppliers-list',
    label: 'Suppliers',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiTruckDelivery' in icon ? icon['mdiTruckDelivery' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_SUPPLIERS'
  },
  {
    href: '/work_orders/work_orders-list',
    label: 'Work orders',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiClipboardList' in icon ? icon['mdiClipboardList' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_WORK_ORDERS'
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },

 {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS'
  },
]

export default menuAside
