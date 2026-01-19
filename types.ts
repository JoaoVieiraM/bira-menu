export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export interface MenuSectionType {
  id: string;
  title: string;
  items: MenuItem[];
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}