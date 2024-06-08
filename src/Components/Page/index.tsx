import { Hero } from "../../Heros";
import Blocks from "../../Blocks";

const Page = ({ page }) => {
  const { hero, layout } = page;
  console.log({hero});
  
  return (
    <>
      <Hero {...hero} />
      <Blocks blocks={layout} />
    </>
  );
};

export default Page;
