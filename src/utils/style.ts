interface Styles {
  gradientBtn: string;
  paddingX: string;
  paddingY: string;
  padding: string;
  heroHeadText: string;
  heroSubText: string;
  sectionHeadText: string;
  sectionSubText: string;
  contentMargin: string;
  afterElement: string;
  mainBtn: string;
  primaryBtn: string;

  secondaryBtn: string;
}

const styles: Styles = {
  gradientBtn:
    "bg-gradient-to-r from-blue-400 to-violet-500 text-nowrap px-5 py-3 rounded-md text-nowprimary  capitalize font-medium text-white hover:bg-gradient-to-l",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  heroHeadText:
    "font-black lg:text-[40px]  xs:text-[32px] text-[28px] lg:leading-[56px] leading-[32px] mt-2",
  heroSubText: "font-bold  md:text-[18px] text-[16px]  mt-2",
  sectionHeadText: " font-black  md:text-[32px]  xs:text-[24px] text-[18px]",
  sectionSubText: " text-[14px]   tracking-wider",
  contentMargin: "my-5 md:my-10 lg:my-30 ",
  afterElement: `relative after:contents[] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:bg-secondray`,
  mainBtn:
    "bg-teritary md:text-[16px] text-[14px] text-white px-5 py-3 rounded-[10px] capitalize font-medium  no-underline  text-nowrap  cursor-pointer transform ease-in-out duration-300 transition hover:scale-110",

  primaryBtn:
    "border-secondray border md:text-[16px] text-[14px] px-5 py-3 rounded-[10px] capitalize font-medium  no-underline  text-nowrap  cursor-pointer transform ease-in-out duration-300 transition hover:scale-110",

  secondaryBtn:
    "border-white border text-white md:text-[16px] text-[14px] px-5 py-3 rounded-[10px] capitalize font-medium  no-underline  text-nowrap  cursor-pointer transform ease-in-out duration-300 transition hover:scale-110",
};

export { styles };
