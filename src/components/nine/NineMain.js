import Nine from "./Nine";

const cardData = [
  { title: "Pizza", text: "Delicious cheese pizza", image: "/images/baground_image.jpg" },
  { title: "Burger", text: "Juicy beef burger", image: "/images/food_bg.jpg" },
  { title: "Pasta", text: "Creamy Alfredo pasta", image: "/images/food_bg.jpg" },
  { title: "Paddu", text: "Spicy South Indian delight", image: "/images/food_bg.jpg" },
  { title: "Sushi", text: "Fresh sushi rolls", image: "/images/food_bg.jpg" },
  { title: "Tacos", text: "Mexican street tacos", image: "/images/food_bg.jpg" },
];

function NineMain() {
  return (
    <Nine
      headings={[
        "Empower Your Business with Access to",
        "World-Class Products, Services, and",
        "Solutions",
      ]}
      description="We cover your connected IT ecosystem."
      cardData={cardData}
    />
  );
}

export default NineMain;
