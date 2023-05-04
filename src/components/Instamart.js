import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  //reusable sections
  return (
    <div className="border border-black p-1 m-1">
      <h1 className="p-1 m-1 font-bold">{title}</h1>

      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline p-1 m-1"
            onClick={(e) => setIsVisible(false)}
          >
            Hide
          </button>
          <p className="p-2 m-2 font-normal">{description} </p>
        </>
      ) : (
        <button
          className="cursor-pointer underline p-1 m-1"
          onClick={(e) => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Us"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(e) => {
          console.log(e);
          e === true ? setVisibleSection("about") : setVisibleSection("");
        }}
      />
      <Section
        title={"Team"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(e) =>
          e === true ? setVisibleSection("team") : setVisibleSection("")
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={(e) =>
          e === true ? setVisibleSection("careers") : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
