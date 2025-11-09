export type Address = {
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  line1: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
};

export type LineItem = {
  description: string;
  qty: number;
  weightKg: number;
  lengthCm?: number;
  widthCm?: number;
  heightCm?: number;
  cubicM?: number;
  dangerous?: boolean;
};

export type ConsignmentDraft = {
  id: string;
  shipper: Address;
  receiver: Address;
  items: LineItem[];
  serviceLevel?: 'Road' | 'Express' | 'Air';
  references?: string[];
  pickup?: { date: string; window: 'AM' | 'PM' | string };
};

export type CarrierQuote = {
  carrier: string;
  service: string;
  base: number;
  fuelPct: number;
  surcharges: { name: string; amount: number }[];
  etaDays: number;
  carbonKg?: number;
  total: number;
  ruleTag?: 'cheapest' | 'fastest' | 'balanced';
};

export type TrackEvent = {
  ts: string;
  code:
    | 'CREATED'
    | 'PICKED_UP'
    | 'IN_TRANSIT'
    | 'OUT_FOR_DELIVERY'
    | 'DELIVERED'
    | 'EXCEPTION';
  location?: string;
  note?: string;
};

export type PricingScenarioOut = {
  services: { name: string; suggested: number; marginPct: number; savingsPct: number; notes?: string }[];
};

export type ReconIngestOut = {
  totalInvoiced: number;
  totalExpected: number;
  variance: number;
  discrepancies: {
    type: 'RateMismatch' | 'FuelSurcharge' | 'Duplicate' | 'AccessorialMissing';
    ref: string;
    amount: number;
    note?: string;
  }[];
};

