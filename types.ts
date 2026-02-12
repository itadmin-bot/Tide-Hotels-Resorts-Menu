
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: CategoryType;
}

export enum CategoryType {
  BREAKFAST = 'Breakfast',
  LUNCH_DINNER = 'Lunch & Dinner',
  NIGERIAN_SOUPS = 'Nigerian Soups',
  SOUPS = 'Soups',
  SMALL_BITES = 'Small Bites',
  SALADS = 'Salads',
  EXTRAS = 'Extras',
  DESSERTS = 'Desserts',
  SOFT_DRINKS = 'Soft Drinks & Juices',
  BEERS_STOUTS = 'Beers & Stouts',
  WINES = 'Wines',
  SPIRITS_LIQUEURS = 'Spirits & Liqueurs'
}

export interface AppState {
  isWelcome: boolean;
  isDarkMode: boolean;
  searchTerm: string;
  selectedCategory: CategoryType | 'All';
}
