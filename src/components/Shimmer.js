const Shimmer = () => {
  return (
    <div className="restaurant-list basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 shadow animate-pulse">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-5 justify-evenly"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
