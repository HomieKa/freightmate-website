import { withBase } from '@/lib/assets';

export type Carrier = {
  name: string;
  logo: string;
};

export const CARRIERS: Carrier[] = [
  { name: 'TFM Xpress', logo: 'https://app.freightmate.com/logo/tfmxpress.png' },
  { name: 'CouriersPlease', logo: 'https://app.freightmate.com/logo/couriers_please.png' },
  { name: 'VFS', logo: 'https://app.freightmate.com/logo/vfs.png' },
  { name: 'Allied Express', logo: 'https://app.freightmate.com/logo/allied_express.png' },
  { name: 'StarTrack', logo: 'https://app.freightmate.com/logo/startrack.png' },
  { name: 'AirRoad Specialised', logo: 'https://app.freightmate.com/logo/air_road_specialised.png' },
  { name: 'TNT', logo: 'https://app.freightmate.com/logo/tnt.png' },
  { name: 'Domestic Freight Express', logo: 'https://app.freightmate.com/logo/domestic_freight_express.png' },
  { name: 'Toll Express', logo: 'https://app.freightmate.com/logo/toll_express.png' },
  { name: 'Tas Freight', logo: 'https://app.freightmate.com/logo/tas_freight.png' },
  { name: 'Followmont', logo: 'https://app.freightmate.com/logo/followmont.png' },
  { name: 'Northline', logo: 'https://app.freightmate.com/logo/northline.png' },
  { name: 'Xpress Freight Management', logo: 'https://app.freightmate.com/logo/xpress_freight_management.png' },
  { name: 'TasConnect', logo: 'https://app.freightmate.com/logo/tas_connect.png' },
  { name: 'Sadleirs', logo: 'https://app.freightmate.com/logo/sadleirs.png' },
];

export type IntegrationItem = {
  src: string;
  label: string;
  desc: string;
  href: string;
};

export const INTEGRATION_ITEMS: IntegrationItem[] = [
  { src: withBase('logos/sugarcrm.svg'), label: 'SugarCRM', desc: 'CRM', href: '/partners/integrations' },
  { src: withBase('logos/pronto.svg'), label: 'Pronto', desc: 'ERP', href: '/partners/integrations' },
  { src: withBase('logos/woo.svg'), label: 'WooCommerce', desc: 'E-commerce', href: '/partners/integrations' },
  { src: withBase('logos/odoo.svg'), label: 'Odoo', desc: 'ERP', href: '/partners/integrations' },
  { src: withBase('logos/shopify.svg'), label: 'Shopify', desc: 'E-commerce', href: '/partners/integrations' },
  { src: withBase('logos/xero.svg'), label: 'Xero', desc: 'Accounting', href: '/partners/integrations' },
  { src: withBase('logos/netsuite.svg'), label: 'NetSuite', desc: 'ERP', href: '/partners/integrations' },
  { src: withBase('logos/sap.svg'), label: 'SAP', desc: 'ERP', href: '/partners/integrations' },
  { src: withBase('logos/dynamics365.svg'), label: 'Dynamics 365', desc: 'ERP/CRM', href: '/partners/integrations' },
  { src: withBase('logos/myob.svg'), label: 'MYOB', desc: 'Accounting', href: '/partners/integrations' },
  { src: withBase('logos/cin7.svg'), label: 'Cin7', desc: 'Inventory', href: '/partners/integrations' },
];
