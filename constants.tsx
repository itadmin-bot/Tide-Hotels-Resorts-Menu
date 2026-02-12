
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

  // COCKTAILS (All N8,199)
  { id: 'ck1', name: 'Long Island Ice Tea', price: 'N8,199', description: 'Vodka, Gin, Tequila, Rum, Tripple sec, Coke and lemon juice.', category: CategoryType.COCKTAILS },
  { id: 'ck2', name: 'Margarita', price: 'N8,199', description: 'Tequila, Tripple sec, freshly squeezed lime juice.', category: CategoryType.COCKTAILS },
  { id: 'ck3', name: 'Martini', price: 'N8,199', description: 'Gin, Vermouth.', category: CategoryType.COCKTAILS },
  { id: 'ck4', name: 'Negroni', price: 'N8,199', description: 'Gin, Vermouth rose and Campari.', category: CategoryType.COCKTAILS },
  { id: 'ck5', name: 'Old Fashioned', price: 'N8,199', description: 'Whiskey, bitters, simple syrup.', category: CategoryType.COCKTAILS },
  { id: 'ck6', name: 'Whiskey Sour', price: 'N8,199', description: 'Whiskey, fresh lemon juice, bar syrup, egg white.', category: CategoryType.COCKTAILS },
  { id: 'ck7', name: 'Mojito', price: 'N8,199', description: 'White rum, simple syrup, fresh lime, mint leaf and mojito soda.', category: CategoryType.COCKTAILS },
  { id: 'ck8', name: 'Sex On the Beach', price: 'N8,199', description: 'Vodka, Peach schnapps, Cranberry juice, orange juice, dash of grenadine and fresh lemon.', category: CategoryType.COCKTAILS },
  { id: 'ck9', name: 'Daiquiri', price: 'N8,199', description: 'Rum, fresh lime or lemon juice, simple syrup.', category: CategoryType.COCKTAILS },
  { id: 'ck10', name: 'Cosmopolitan', price: 'N8,199', description: 'Vodka, triple sec, cranberry juice, lime juice.', category: CategoryType.COCKTAILS },
  { id: 'ck11', name: 'Pina Colada', price: 'N8,199', description: 'Rum, cream of coconut, pineapple, coconut rum.', category: CategoryType.COCKTAILS },

  // TIDE SIGNATURES (All N9,999)
  { id: 'ts1', name: 'Tide Ignite', price: 'N9,999', description: 'Vodka, fresh tomatoes juice, ginger, fresh lemon and bar syrup.', category: CategoryType.TIDE_SIGNATURES },
  { id: 'ts2', name: 'Tide Special Aperitif', price: 'N9,999', description: 'Fresh orange juice, Campari and Gin.', category: CategoryType.TIDE_SIGNATURES },
  { id: 'ts3', name: 'Tide Rush', price: 'N9,999', description: 'Vodka, Sweet red wine, Tripple sec and a dash of lemon juice.', category: CategoryType.TIDE_SIGNATURES },

  // MOCKTAILS (All N6,199 except Strawberry)
  { id: 'mk1', name: 'Virgin Pina Colada', price: 'N6,199', description: 'Fresh pineapple juice, coconut milk, simple syrup.', category: CategoryType.MOCKTAILS },
  { id: 'mk2', name: 'Virgin Mojito', price: 'N6,199', description: 'Mint leaf, lemon juice, mojito soda, brown sugar.', category: CategoryType.MOCKTAILS },
  { id: 'mk3', name: 'Blue Lagoon', price: 'N6,199', description: 'Blue curacao, lemon juice, sprite.', category: CategoryType.MOCKTAILS },
  { id: 'mk4', name: 'Chapman', price: 'N6,199', description: 'Fanta, sprite, orange juice, grenadine, fresh or lemon juice.', category: CategoryType.MOCKTAILS },
  { id: 'mk5', name: 'Virgin Strawberry Daiquiri', price: 'N7,050', description: 'Strawberry fruit, dash of lemon or lime juice, simple syrup.', category: CategoryType.MOCKTAILS },

  // SHOTS
  { id: 'sh1', name: 'Tequila shot', price: 'N3,000', description: 'Premium silver/gold tequila.', category: CategoryType.SHOTS },
  { id: 'sh2', name: 'Vodka shot', price: 'N3,000', description: 'Triple distilled premium vodka.', category: CategoryType.SHOTS },
  { id: 'sh3', name: 'Gin shot', price: 'N3,000', description: 'London dry gin.', category: CategoryType.SHOTS },
  { id: 'sh4', name: 'Flaming Dr Pepper', price: 'N5,000', description: 'Amaretto, Rum.', category: CategoryType.SHOTS },
  { id: 'sh5', name: 'Flaming Jesus', price: 'N5,000', description: 'Vodka, grenadine, lime, rum.', category: CategoryType.SHOTS },

  // MILKSHAKES & SMOOTHIES
  { id: 'ms1', name: 'Express Milkshake Choice', price: 'N8,250', description: 'Choice of: Banana, Strawberry, Vanilla, Chocolate, or Oreo.', category: CategoryType.MILKSHAKES },
  { id: 'sm1', name: 'Zenza Dream Smoothie', price: 'N4,000', description: 'Banana, pineapple. Fuse with whipping cream.', category: CategoryType.SMOOTHIES },
  { id: 'sm2', name: 'Minty Zenza Smoothie', price: 'N4,000', description: 'Apple, orange, pineapple and mint leaf.', category: CategoryType.SMOOTHIES },
  { id: 'sm3', name: 'Freshly Squeezed Juice', price: 'N4,000', description: 'Choice of: Orange, Watermelon, Pineapple, Apple, or Bitroot.', category: CategoryType.SMOOTHIES },

  // SOFT DRINKS
  { id: 'ds1', name: 'Water (60cl)', price: 'N600', description: 'Premium bottled water.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds2', name: 'Fizzy (Soft Drinks)', price: 'N1,000', description: 'Coke, Sprite, Fanta, Schweppes, or Malt.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds3', name: 'Pack Juice (Chivita/Other)', price: 'N3,500', description: 'Orange, Pineapple, Mango, or Apple juice.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds4', name: 'Cranberry Juice (Strobe)', price: 'N12,500', description: 'Premium cranberry juice.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds5', name: 'Red Bull Energy', price: 'N3,500', description: 'Premium energy drink.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds6', name: 'Power Horse Energy', price: 'N3,500', description: 'Energy beverage.', category: CategoryType.SOFT_DRINKS },
  { id: 'ds7', name: 'Black Bullet Energy', price: 'N3,500', description: 'Strong energy drink.', category: CategoryType.SOFT_DRINKS },

  // BEERS
  { id: 'db1', name: 'Heineken', price: 'N2,000', description: 'Premium international lager.', category: CategoryType.BEERS_STOUTS },
  { id: 'db2', name: 'Budweiser', price: 'N2,700', description: 'Premium American lager.', category: CategoryType.BEERS_STOUTS },
  { id: 'db3', name: 'Desperados', price: 'N1,500', description: 'Tequila flavored beer.', category: CategoryType.BEERS_STOUTS },
  { id: 'db4', name: 'Smirnoff Double Black', price: 'N1,500', description: 'Ready-to-drink vodka blend.', category: CategoryType.BEERS_STOUTS },

  // WINES
  { id: 'dw1', name: 'Carlo Rossi Wine Selection', price: 'N19,000', description: 'Red, White, or Sweet selection.', category: CategoryType.WINES },
  { id: 'dw4', name: 'Nederburg Wine', price: 'N40,000', description: 'Luxury vintage wine.', category: CategoryType.WINES },
  { id: 'dw11', name: 'J&W (Non-Alcoholic)', price: 'N12,000', description: 'Premium sparkling non-alcoholic wine.', category: CategoryType.WINES },

  // WHISKEY & SPIRITS
  { id: 'dsp1', name: 'Jameson Green Irish', price: 'N48,000', description: 'Triple-distilled Irish whiskey.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp4', name: 'Black Label', price: 'N79,000', description: 'Johnnie Walker iconic scotch blend.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp_bl', name: 'Blue Label', price: 'N711,000', description: 'Ultra-luxury Johnnie Walker blend.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp15', name: 'Hendricks Gin', price: 'N85,000', description: 'Premium cucumber and rose infused gin.', category: CategoryType.SPIRITS_LIQUEURS },
  { id: 'dsp16', name: 'Bombay Sapphire', price: 'N41,000', description: 'Iconic London dry gin.', category: CategoryType.SPIRITS_LIQUEURS },

  // COGNAC
  { id: 'dsp8', name: 'Hennessy XO', price: 'N790,000', description: 'Extra Old luxury cognac.', category: CategoryType.COGNAC },
  { id: 'dsp9', name: 'Hennessy VSOP', price: 'N205,000', description: 'Very Superior Old Pale cognac.', category: CategoryType.COGNAC },
  { id: 'dsp10', name: 'Hennessy VS', price: 'N180,000', description: 'Very Special premium cognac.', category: CategoryType.COGNAC },
  { id: 'dsp11', name: 'Martell Blue Swift', price: 'N185,250', description: 'Cognac finished in bourbon casks.', category: CategoryType.COGNAC },
  { id: 'dsp12', name: 'Martell VS', price: 'N94,000', description: 'Elegant premium cognac.', category: CategoryType.COGNAC },
];
