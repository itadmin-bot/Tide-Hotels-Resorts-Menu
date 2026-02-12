
import { MenuItem, CategoryType } from './types.ts';

export const MENU_DATA: MenuItem[] = [
  // BREAKFAST
  { id: 'b1', name: 'English Breakfast', price: 'N14,000', description: 'Toast, choice of eggs, grilled sausages, and sautéed vegetables.', category: CategoryType.BREAKFAST },
  { id: 'b2', name: 'Fluffy Pancakes with Eggs & Sausages', price: 'N13,000', description: 'Soft Nigerian-style pancakes served with scrambled eggs and grilled sausages.', category: CategoryType.BREAKFAST },
  { id: 'b3', name: 'Custard & Akara', price: 'N9,000', description: 'Warm creamy custard served with golden bean cakes.', category: CategoryType.BREAKFAST },
  { id: 'b4', name: 'Nigerian Breakfast', price: 'N10,000', description: 'Fried/boiled yam, fried/boiled plantain with kidney-liver sauce or egg sauce.', category: CategoryType.BREAKFAST },
  { id: 'b5', name: 'Waffles with Eggs & Grilled Sausages', price: 'N14,000', description: 'Freshly made waffles served with eggs and sausages.', category: CategoryType.BREAKFAST },
  { id: 'b6', name: 'Steamed or Baked Potatoes with Egg Sauce', price: 'N11,500', description: 'Comforting breakfast choice with spiced egg sauce.', category: CategoryType.BREAKFAST },
  { id: 'b7', name: 'Breakfast Quesadillas', price: 'N14,500', description: 'Soft tortillas filled with eggs, cheese, and grilled vegetables.', category: CategoryType.BREAKFAST },
  { id: 'b8', name: 'Omelette & Toast', price: 'N10,000', description: 'Classic omelette served with buttered toast and grilled tomato.', category: CategoryType.BREAKFAST },
  { id: 'b9', name: 'Liver & Kidney Sauce with roasted potatoes', price: 'N11,500', description: 'Sautéed liver and kidney in mild Tide sauce with fries.', category: CategoryType.BREAKFAST },
  { id: 'b10', name: 'Porridge Oats with Milk & Fruit Topping', price: 'N9,500', description: 'Warm oats with banana slices and coconut shavings.', category: CategoryType.BREAKFAST },

  // LUNCH & DINNER
  { id: 'ld1', name: 'Chicken Jambalaya (with Grilled Chicken or Turkey)', price: 'N23,500', description: 'Creole-style rice cooked with vegetables, herbs, and Tide seasoning.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld2', name: 'Orange-Glazed Grilled Chicken & Rice', price: 'N13,000', description: 'Tender grilled chicken in citrus glaze served with steamed rice.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld3', name: 'Grilled Nile Perch Fillet', price: 'N27,500', description: 'Giwan Ruwa fish fillet grilled in herb batter sauce, served with roasted or mashed potatoes and sautéed vegetables.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld4', name: 'Penne in Arrabbiata Sauce', price: 'N28,000', description: 'Tomato pasta with chicken or shrimp in arrabiatta sauce', category: CategoryType.LUNCH_DINNER },
  { id: 'ld5', name: 'Penne Alfredo (with Chicken or Shrimp)', price: 'N29,000', description: 'Creamy cheesy pasta served with garlic bread.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld6', name: 'Seafood Stir-Fry with Rice', price: 'N29,500', description: 'Spicy mixed seafood stir-fry served with basmati rice.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld7', name: 'Fried rice', price: 'N18,000', description: 'Curry rice with vegetables served with grilled chicken or braised goat meat and coleslaw.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld8', name: 'Jollof Rice', price: 'N16,000', description: 'Spicy rice in tomato sauce served with grilled chicken or braised goat meat and coleslaw.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld9', name: 'Coconut Rice', price: 'N18,000', description: 'Rice cooked in coconut milk served with grilled chicken or braised goat meat and plantain', category: CategoryType.LUNCH_DINNER },
  { id: 'ld10', name: 'Spaghetti Bolognese', price: 'N11,000', description: 'Minced meat in rich tomato sauce garnished with cheese.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld11', name: 'Beef or Chicken Stroganoff', price: 'N29,000', description: 'Creamy sautéed strips of beef or chicken in rich mushroom sauce.', category: CategoryType.LUNCH_DINNER },
  { id: 'ld12', name: 'Goat Ragu & Fried Yam', price: 'N20,000', description: 'Slow-cooked goat meat in tomato ragu sauce with fried yam cubes.', category: CategoryType.LUNCH_DINNER },

  // NIGERIAN SOUPS
  { id: 'ns1', name: 'Egusi with Fish or Chicken', price: 'N16,500', description: 'Traditional melon seed soup served with semovita or wheat swallow.', category: CategoryType.NIGERIAN_SOUPS },
  { id: 'ns2', name: 'Okra Soup (with beef or goatmeat)', price: 'N15,500', description: 'Fresh okra cooked in Tide spices, served with semovita or wheat swallow.', category: CategoryType.NIGERIAN_SOUPS },
  { id: 'ns3', name: 'Afang Soup (with Beef or Goat Meat)', price: 'N16,000', description: 'Rich vegetable soup made with waterleaf & okazi leaves, served with swallow of choice.', category: CategoryType.NIGERIAN_SOUPS },
  { id: 'ns4', name: 'Bitter leaf (with Goat or Beef)', price: 'N17,000', description: 'Palm kernel soup served with beef and goatmeat', category: CategoryType.NIGERIAN_SOUPS },
  { id: 'ns5', name: 'Seafood okro', price: 'N23,000', description: 'Mix of seafood in okro soup served with swallow of choice', category: CategoryType.NIGERIAN_SOUPS },
  { id: 'ns6', name: 'Fisherman soup', price: 'N25,000', description: 'Traditional broth mixed with seafood and periwinkles served with swallow of choice', category: CategoryType.NIGERIAN_SOUPS },

  // SOUPS
  { id: 's1', name: 'Goat Meat Pepper Soup', price: 'N10,500', description: 'Chopped goat meat in spicy soup broth served with bread rolls', category: CategoryType.SOUPS },
  { id: 's2', name: 'Fish Pepper Soup', price: 'N15,000', description: 'Catfish or Croaker in spicy soup broth served with bread rolls', category: CategoryType.SOUPS },
  { id: 's3', name: 'Cream of Chicken Soup', price: 'N16,000', description: 'Chicken in cream broth served croutons or fresh bread buns.', category: CategoryType.SOUPS },

  // SMALL BITES
  { id: 'sb1', name: 'Chicken Wings in Buffalo Sauce', price: 'N10,000', description: 'Crispy chicken wings tossed in sweet-spicy buffalo glaze.', category: CategoryType.SMALL_BITES },
  { id: 'sb2', name: 'Fish & Chips', price: 'N13,500', description: 'Crispy fish fillet with fries and classic tartar dip.', category: CategoryType.SMALL_BITES },
  { id: 'sb3', name: 'Shrimp Tempura', price: 'N12,000', description: 'Lightly battered shrimp served with tartar and pepper sauce.', category: CategoryType.SMALL_BITES },
  { id: 'sb4', name: 'Chicken tenders', price: 'N12,000', description: 'Spicy grilled crispy chicken strips served with French fries', category: CategoryType.SMALL_BITES },
  { id: 'sb5', name: 'Vegetable & Chicken Pancake Rolls', price: 'N13,000', description: 'Soft pancake rolls stuffed with sautéed vegetables and grilled chicken.', category: CategoryType.SMALL_BITES },
  { id: 'sb6', name: 'Mini Pulled Beef Sliders & Sweet Potato Fries', price: 'N14,000', description: 'Mini beef sliders served with seasoned sweet potato fries.', category: CategoryType.SMALL_BITES },
  { id: 'sb7', name: 'Beef and plantain skewers', price: 'N9,000', description: 'Spicy beef and plantain on a skewer', category: CategoryType.SMALL_BITES },
  { id: 'sb8', name: 'Club Sandwich', price: 'N10,500', description: 'Toasted bread with chicken and egg filling served with chips', category: CategoryType.SMALL_BITES },

  // SALADS
  { id: 'sl1', name: 'Greek Salad', price: 'N10,000', description: 'Refreshing mix of lettuce, cucumber, olives, and feta cheese.', category: CategoryType.SALADS },
  { id: 'sl2', name: 'Garden salad', price: 'N12,000', description: 'Refreshing mix of vegetables served with eggs and signature Tide sauce', category: CategoryType.SALADS },
  { id: 'sl3', name: 'Grilled chicken salad', price: 'N15,000', description: 'Refreshing mix of vegetables with grilled chicken and boiled eggs served with tide signature Tide sauce', category: CategoryType.SALADS },
  { id: 'sl4', name: 'Coleslaw', price: 'N3,000', description: 'Creamy shredded cabbage and carrot salad.', category: CategoryType.SALADS },

  // EXTRAS
  { id: 'ex1', name: 'Jollof rice', price: 'N4,000', description: 'Spicy rice cooked in meat broth', category: CategoryType.EXTRAS },
  { id: 'ex2', name: 'French fries', price: 'N3,000', description: 'Deep fried crispy potatoes', category: CategoryType.EXTRAS },
  { id: 'ex3', name: 'Plantain', price: 'N6,000', description: 'Deep fried plantain', category: CategoryType.EXTRAS },
  { id: 'ex4', name: 'Eggs', price: 'N2,500', description: 'Scrambled, omelet or boiled eggs', category: CategoryType.EXTRAS },
  { id: 'ex5', name: 'Roasted herb potatoes', price: 'N5,000', description: 'Sauteed potato tossed in herb sauce', category: CategoryType.EXTRAS },
  { id: 'ex6', name: 'Grilled turkey', price: 'N9,000', description: 'BBQ, spicy or buffalo sauce', category: CategoryType.EXTRAS },
  { id: 'ex7', name: 'Grilled chicken', price: 'N5,000', description: 'BBQ, spicy or buffalo sauce', category: CategoryType.EXTRAS },
  { id: 'ex8', name: 'Peppered braised goatmeat', price: 'N6,000', description: 'Braised goatmeat tossed in pepper sauce and mixed vegetables', category: CategoryType.EXTRAS },

  // DESSERTS
  { id: 'd1', name: 'Yoghurt parfait', price: 'N8,500', description: 'Layered yogurt, granola and fruits', category: CategoryType.DESSERTS },
  { id: 'd2', name: 'Vanilla Ice Cream Trio', price: 'N7,500', description: 'Three scoops of vanilla ice cream with chocolate and caramel drizzle.', category: CategoryType.DESSERTS },
  { id: 'd3', name: 'Mixed Fruit Crumble & Ice Cream', price: 'N9,000', description: 'Seasonal fruits in a flaky crumble, served warm with vanilla ice cream.', category: CategoryType.DESSERTS },
  { id: 'd4', name: 'Fruit salad', price: 'N7,000', description: 'Mix fruits served with honey and lemon sauce', category: CategoryType.DESSERTS },

  // DRINKS - SOFT DRINKS & JUICES
  { id: 'ds1', name: 'Water (60cl)', price: 'N600', description: 'Premium bottled water.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds2', name: 'Soft Drinks', price: 'N2,000', description: 'Selection of carbonated sodas.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds3', name: 'Amstel Malt', price: 'N2,000', description: 'Premium malted beverage.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds4', name: 'Chi Ice Tea', price: 'N5,000', description: 'Refreshing iced tea beverage.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds5', name: 'Chivita', price: 'N4,000', description: 'Premium fruit juice selection.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds6', name: 'Pack Juice', price: 'N3,000', description: 'Standard packaged juice.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds7', name: 'Cranberry Juice', price: 'N3,500', description: 'Premium cranberry fruit juice.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds8', name: 'Red Bull', price: 'N5,000', description: 'Premium energy drink.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds9', name: 'Power horse (Small)', price: 'N2,700', description: 'Energy drink in small size.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds10', name: 'Power horse (Big)', price: 'N3,000', description: 'Energy drink in large size.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds11', name: 'Black Bullet', price: 'N5,000', description: 'Strong energy beverage.', category: CategoryType.SOFT_DRINKS },

  // DRINKS - BEERS & STOUTS
  { id: 'db1', name: 'Heineken', price: 'N3,000', description: 'Premium international lager.', category: CategoryType.BEERS_STOUTS },
  { id: 'db2', name: 'Budweiser', price: 'N2,700', description: 'Premium American lager.', category: CategoryType.BEERS_STOUTS },
  { id: 'db3', name: 'Medium stout', price: 'N2,700', description: 'Rich and dark brewed stout.', category: CategoryType.BEERS_STOUTS },
  { id: 'db4', name: 'Trophy', price: 'N2,500', description: 'Classic lager beer.', category: CategoryType.BEERS_STOUTS },
  { id: 'db5', name: 'Desperados', price: 'N3,000', description: 'Tequila flavored beer.', category: CategoryType.BEERS_STOUTS },
  { id: 'db6', name: 'Smirnoff double black', price: 'N3,000', description: 'Ready-to-drink vodka blend.', category: CategoryType.BEERS_STOUTS },
  { id: 'db7', name: 'Legend', price: 'N2,500', description: 'Premium extra stout.', category: CategoryType.BEERS_STOUTS },
  { id: 'db8', name: 'Orijin Bitters', price: 'N2,500', description: 'Herb-infused alcoholic bitters.', category: CategoryType.BEERS_STOUTS },
  { id: 'db9', name: 'Guiness Stout', price: 'N4,000', description: 'Classic premium dark stout.', category: CategoryType.BEERS_STOUTS },

  // DRINKS - WINES
  { id: 'dw1', name: 'Carlo Rossi Red/White/Sweet', price: 'N19,000', description: 'Premium table wine selection.', category: CategoryType.WINES },
  { id: 'dw2', name: 'Four Cousins Red/White', price: 'N15,000', description: 'Popular South African blend.', category: CategoryType.WINES },
  { id: 'dw3', name: 'Agor wine', price: 'N20,000', description: 'Rich red wine selection.', category: CategoryType.WINES },
  { id: 'dw4', name: 'Nederburg Wine', price: 'N40,000', description: 'Luxury vintage wine.', category: CategoryType.WINES },
  { id: 'dw5', name: 'Escudo Rojo', price: 'N40,000', description: 'Chilean luxury red wine.', category: CategoryType.WINES },
  { id: 'dw6', name: 'Sweet lips', price: 'N14,000', description: 'Light sweet wine selection.', category: CategoryType.WINES },
  { id: 'dw7', name: 'Declan', price: 'N15,500', description: 'Premium red wine.', category: CategoryType.WINES },
  { id: 'dw8', name: '4th street', price: 'N18,000', description: 'Popular sweet wine selection.', category: CategoryType.WINES },
  { id: 'dw9', name: 'Drostdy-Hof Big', price: 'N23,000', description: 'Premium large format wine.', category: CategoryType.WINES },
  { id: 'dw10', name: 'Martini Rosso', price: 'N27,000', description: 'Italian sweet red vermouth.', category: CategoryType.WINES },
  { id: 'dw11', name: 'J&W (Non-Alcoholic)', price: 'N12,000', description: 'Premium sparkling non-alcoholic wine.', category: CategoryType.WINES },
  { id: 'dw12', name: 'Chamdor (Non-Alcoholic)', price: 'N11,000', description: 'Classic sparkling grape juice.', category: CategoryType.WINES },
  { id: 'dw13', name: 'Veleta (Non-Alcoholic)', price: 'N8,000', description: 'Refreshing sparkling fruit drink.', category: CategoryType.WINES },

  // DRINKS - SPIRITS & LIQUEURS
  { id: 'dsp1', name: 'Jameson Green Irish', price: 'N48,000', description: 'Triple-distilled Irish whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp2', name: 'Jameson Black Barrel', price: 'N79,500', description: 'Premium charred barrel Irish whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp3', name: 'Jack Daniels', price: 'N56,000', description: 'Classic Tennessee whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp4', name: 'Black Label', price: 'N79,000', description: 'Johnnie Walker iconic scotch blend.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp5', name: 'Glen 12 yrs', price: 'N120,000', description: 'Aged single malt scotch whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp6', name: 'Glen 15 yrs', price: 'N174,999', description: 'Premium aged single malt.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp7', name: 'Glen 18 yrs', price: 'N276,425', description: 'Luxury aged single malt.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp8', name: 'Hennessy XO', price: 'N790,000', description: 'Extra Old luxury cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp9', name: 'Hennessy VSOP', price: 'N205,000', description: 'Very Superior Old Pale cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp10', name: 'Hennessy VS', price: 'N180,000', description: 'Very Special premium cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp11', name: 'Martell Blue Swift', price: 'N185,250', description: 'Cognac finished in bourbon casks.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp12', name: 'Martell VSOP', price: 'N94,000', description: 'Elegant and balanced VSOP cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp13', name: 'Remy Martins XO', price: 'N675,625', description: 'Luxury fine champagne cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp14', name: 'Remy Martins VSOP', price: 'N158,000', description: 'Exquisite VSOP cognac.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp15', name: 'Hendricks Gin', price: 'N85,000', description: 'Premium cucumber and rose infused gin.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp16', name: 'Bombay Sapphire', price: 'N41,000', description: 'Iconic London dry gin.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp17', name: 'Absolut Vodka (Big)', price: 'N38,000', description: 'Classic Swedish premium vodka.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp18', name: 'Ciroc Vodka', price: 'N80,000', description: 'Luxury grape-based vodka.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp19', name: 'Olmeca Tequila - White/Gold', price: 'N47,000', description: 'Premium Mexican tequila.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp20', name: 'Gordon\'s Gin (Big)', price: 'N12,000', description: 'Standard London dry gin.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp21', name: 'Gordon\'s Gin (Small)', price: 'N4,000', description: 'Small bottle dry gin.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp22', name: 'Campari (Medium)', price: 'N30,000', description: 'Italian bitter liqueur.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp23', name: 'Campari (Small)', price: 'N12,000', description: 'Small size bitter liqueur.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp24', name: 'Baileys', price: 'N35,000', description: 'Premium Irish cream liqueur.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp25', name: 'Black Bullet', price: 'N5,000', description: 'Strong spirit beverage.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp26', name: 'Williams Lawson', price: 'N31,000', description: 'Blended scotch whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp27', name: 'Skyy Vodka (Small)', price: 'N10,000', description: 'Premium vodka in small size.', category: CategoryType.SPIRITS_LIQUEURS },
];
