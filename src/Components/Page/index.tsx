import { Hero } from "../../Heros";
import Blocks from "../../Blocks";

const Page = ({ page }) => {
  const { hero, layout } = page;

  return (
    <>
      <Hero {...hero} />
      <Blocks blocks={layout} />
    </>
  );
};

export default Page;
