import MealList from "../components/MealList";
import { MongoClient } from "mongodb";
import Link from "next/link";

const HomePage = (props) => {
  return (
    <div>
      <div className="bg-yellow-300 px-4 py-2 rounded-lg text-gray-150 font-medium mt-4">
        <Link href={`/new-meal`}>New meal</Link>
      </div>
      <MealList meals={props.mealList} />;
    </div>
  );
};

//export async function getServerSideProps(context) {   //WORKS normally
export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();
  client.close();

  // context.meals.setHeader(    "Cache-Control",    "s-maxage=60, stale-while-revalidate=30"  ); // set caching header

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
      revalidate: 10,
    },
  };
}
/*
export async function getStaticProps() {
 // const DATABASE_NAME = "FoodApp";
  //const DATABASE_PASSWORD = "1234567H";

    const client = await MongoClient.connect(
      `mongodb+srv://aleksandr04635:df368ie90@cluster0.vkcz0.mongodb.net/next-food-app?retryWrites=true&w=majority`
   // `mongodb+srv://masu:${DATABASE_PASSWORD}@foodapp.0tpop.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
         revalidate: 10,
    },
  };
}
*/
export default HomePage;

/*
export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};
 
export default function Page({ repo }) {
  return repo.stargazers_count;
}
*/
