import { styles } from "../../utils/style";
const SectionWrapper = (Component, idName) =>
  function HOC() {

    
    return (
      <>
        <section
          
          className={`${styles.paddingX}  mx-auto relative z-0 `}
        >
          <span   className="block w-[5px] h-[68px] " id={idName}>
            {" "}
            &nbsp;
          </span>
          <Component />
        </section>
      </>
    );
  };

export default SectionWrapper;
