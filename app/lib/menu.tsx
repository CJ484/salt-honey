export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  picture: string;
}

export type MenuCategoryKey = "hotDrinks" | "coldDrinks" | "bakery";

export interface MenuCategory {
  key: MenuCategoryKey;
  title: string;
  items: readonly MenuItem[];
}

export const MENU_ITEMS = {
  menu: {
    hotDrinks: [
      {
        id: "hot_001",
        name: "Salted Honey Latte",
        price: 6.5,
        description: "House espresso, raw local honey, flaky sea salt, steamed oat milk.",
        picture:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "hot_002",
        name: "Ceremonial Matcha Latte",
        price: 5.75,
        description: "First harvest leaves, traditionally whisked to order.",
        picture:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "hot_003",
        name: "Single Origin Pour Over",
        price: 5.0,
        description: "Rotating weekly selection based on seasonal harvests.",
        picture:
          "https://images.unsplash.com/photo-1620052086921-82ca13af75a5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    coldDrinks: [
      {
        id: "cold_001",
        name: "Sage & Mint Tonic",
        price: 5.5,
        description: "Iced botanical infusion, deeply refreshing and crisp.",
        picture:
          "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "cold_002",
        name: "Iced Oat Cortado",
        price: 4.75,
        description: "Equal parts rich espresso and chilled oat milk over ice.",
        picture:
          "https://images.unsplash.com/photo-1569723356449-a5c2bad9a1d6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "cold_003",
        name: "Cold Brew Reserve",
        price: 5.25,
        description: "Steeped for 24 hours, served with a splash of sweet cream.",
        picture:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800",
      },
    ],
    bakery: [
      {
        id: "bake_001",
        name: "Blueberry Muffin",
        price: 4.5,
        description: "Blueberry Muffin with a sweet and tangy flavor.",
        picture:
          "https://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "bake_002",
        name: "Chocolate cookie",
        price: 3.0,
        description: "Homemade Chocolate cookie with a crispy exterior and a soft interior.",
        picture:
          "https://images.unsplash.com/photo-1664854678365-ad59da72356c?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "bake_003",
        name: "Flaky Butter Croissant",
        price: 4.0,
        description: "Flaky butter croissant with a crispy exterior and a soft interior.",
        picture:
          "https://images.unsplash.com/photo-1691480162735-9b91238080f6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  { key: "hotDrinks", title: "Hot Drinks", items: MENU_ITEMS.menu.hotDrinks },
  { key: "coldDrinks", title: "Cold Drinks", items: MENU_ITEMS.menu.coldDrinks },
  { key: "bakery", title: "Bakery & Bites", items: MENU_ITEMS.menu.bakery },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
