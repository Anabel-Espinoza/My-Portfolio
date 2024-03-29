import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-pink before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-pink before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-navy"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#portfolio"
        className={`${
          selectedPage === "portfolio" ? selectedStyles : "bg-navy"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("portfolio")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-navy"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />

      <AnchorLink
        href="#resume"
        className={`${
          selectedPage === "resume" ? selectedStyles : "bg-navy"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("resume")}
      />

    </div>
  );
};

export default DotGroup;