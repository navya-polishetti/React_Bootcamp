import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
//reusable sections
return (
<div className="border border-black p-1 m-1">
<h1 className="p-1 m-1 font-bold">{title}</h1>
<>
{isVisible ? (
<button
className="cursor-pointer underline"
onClick={(e) => setIsVisible(false)} >
Hide
</button>
) : (
<button
className="cursor-pointer underline p- m-1"
onClick={(e) => setIsVisible(true)} >
Show
</button>
)}

        {isVisible && <p className="p-2 m-2 font-normal">{description}</p>}
      </>
    </div>

);
};
const Instamart = () => {
const [sectionConfig, setSectionConfig] = useState({
showAbout: false,
showTeam: false,
showCareers: false,
});
return (
<div>
<h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
<Section
title={"About Us"}
description={
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
isVisible={sectionConfig.showAbout}
setIsVisible={() =>
setSectionConfig({
showAbout: true,
showTeam: false,
showCareers: false,
})
}
/>
<Section
title={"Team"}
description={
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
isVisible={sectionConfig.showTeam}
setIsVisible={() =>
setSectionConfig({
showAbout: false,
showTeam: true,
showCareers: false,
})
}
/>
<Section
title={"Careers"}
description={
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
isVisible={sectionConfig.showCareers}
setIsVisible={() =>
setSectionConfig({
showAbout: false,
showTeam: false,
showCareers: true,
})
}
/>
</div>
);
};

export default Instamart;
