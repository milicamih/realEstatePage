import { Date } from './date'
import { StartEndDate } from './startEndDate';
import { Price } from './price';
import { Location } from './location/location';
import { Images } from './images'
import { Features } from './features/features';
import { Sizes } from './sizes/sizes';
import { Permissions } from './permissions';
import { Regulations } from './regulations';
import { Negotiator } from './negotiator';
import { Rooms } from './rooms';
import { Office } from './office';
import { AgencyCommission } from './agencyCommission';
import { Building } from './building/building';
import { Occupation } from './occupation/occupation';


export class RealEstate {

  id: number;
  type: string; 
  sub_type: string;
  negotiation: string;
  rent_period: string;
  status: string;
  publish_status: string;
  description: string;
  description_en: string;
  description_fr: string;
  description_nl: string;
  description_title: string;
  description_title_en: string;
  description_title_fr: string;
  description_title_nl: string;
  living_rooms: number;
  kitchens: number;
  bedrooms: number;
  bathrooms: number;
  toilets: number;
  floors: number;
  showrooms: number;
  manufacturing_areas: number;
  storage_rooms: number;
  kitchen_condition: string;
  bathroom_condition: string;
  epc_value: number;
  epc_category: string;
  epc_reference: number;
  garden_orientation: string;
  terrace_orientation: string;
  video_url: string;
  appointment_service_url: string;
  general_condition: string;
  legal_mentions: string;
  legal_mentions_en: string;
  legal_mentions_fr: string;
  legal_mentions_nl: string;
  auction: Date;
  open_homes: StartEndDate;
  price: Price;
  price_costs: string;
  price_costs_en: string;
  price_costs_fr: string;
  price_costs_nl: string;
  price_taxes: string;
  price_taxes_en: string;
  price_taxes_fr: string;
  price_taxes_nl: string;
  custom_price: string;
  cadastral_income: number;
  location: Location;
  amenities : string[];
  sizes: Sizes;
  permissions: Permissions; 
  regulations: Regulations;
  rooms: Rooms[];
  images: Images[];   
  plans:Images[];
  documents: Images[];
  features: Features;
  building: Building; 
  negotiator: Negotiator;   
  agency_commission: AgencyCommission;
  mandate: StartEndDate;
  internal_note: string;
  occupation: Occupation;
  office: Office; 
  properties: any[];
}
   
