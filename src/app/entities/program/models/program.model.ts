export interface Program {
  url: string;
  id: number;
  status: string;
  budget: number | null;
  actuals: number | null;
  difference: number;
  level1_uuid: string;
  unique_id: number | null;
  name: string;
  funding_status: string;
  cost_center: string;
  description: string;
  public_dashboard: boolean;
  start_date: number | null;
  end_date: number | null;
  create_date: string;
  edit_date: string;
  sort: number;
  organization: string;
  portfolio: number | null;
  fund_code: any[];
  award: string[];
  sector: string[];
  sub_sector: string[];
  country: string[];
  milestone: string[];
  user_access: string[];
}
