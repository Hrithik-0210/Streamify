export const ShimmerMenu = () => {
  return (
    <div
      data-testid="shimmer"
      className="flex flex-row flex-wrap gap-4 justify-center "
    >
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="w-64 h-[17rem] bg-stone-100 flex gap-2 shadow-md rounded-lg border mt-5"></div>
        ))}
    </div>
  );
};

export const CategoryShimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="flex flex-row flex-wrap gap-4 justify-center absolute top-16 left-40 "
    >
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="w-64 h-[17rem] bg-stone-100 flex gap-2 shadow-md rounded-lg border mt-5"></div>
        ))}
    </div>
  );
};

export const WatchPageShimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className=" absolute top-16 right-0 flex flex-col flex-wrap gap-1 mx-1  "
    >
      {/* {console.log("shimmer loading")} */}

      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            className="w-96 h-36 bg-stone-100 flex flex-col shadow-lg rounded-lg border my-2 "
            key={index}
          ></div>
        ))}
    </div>
  );
};

export const SearchPageShimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="flex flex-col flex-wrap gap-1 mx-1 absolute top-20 left-[20%]  "
    >
      {/* {console.log("shimmer loading")} */}

      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            className="w-[65svw] h-64 bg-stone-100 flex flex-col shadow-lg rounded-lg border my-2 "
            key={index}
          ></div>
        ))}
    </div>
  );
};
