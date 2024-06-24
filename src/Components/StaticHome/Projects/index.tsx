/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import SectionWrapper from "../../../hoc/SectionWrapper";
import ProjectCard from "../ProjectCard";
import { ProjectItem } from "../../../utils/ifuture.types";
import { project1, } from "../../../assets";
import { styles } from "../../../utils/style";
import i18next from "i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  const projectsImgs = [project1];
  const label = t("label");
  const SectionTitle = t("SectionTitle");
  const projectItems: ProjectItem[] = t("projectItems", {
    returnObjects: true,
  });

  return (
    <>
      <div className="relative flex my-10 flex-col   gap-5 border-b-2">
        <span
          className={
            styles.sectionSubText +
            ` absolute -top-10   ${
              i18next.dir() == "rtl" ? "right-0" : "left-0 "
            } `
          }
        >
          {label}
        </span>
        <h3 className={styles.sectionHeadText + "  mb-2 whitespace-break-spaces break-words"}>{SectionTitle}</h3>
      </div>
      <div className="w-full">
        {projectItems.map((item, i) => (
          <ProjectCard project={item} img={projectsImgs[i]} key={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
