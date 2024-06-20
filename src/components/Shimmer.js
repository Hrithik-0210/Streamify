export const ShimmerMenu = () => {
  return (
    <div data-testid="shimmer" className="flex flex-row flex-wrap gap-4 mx-3  ">
      {Array(12)
        .fill("")
        .map((e) => (
          <div className="w-[17rem] h-[17rem] bg-stone-50 flex gap-2 shadow-lg rounded-lg border mt-5"></div>
        ))}
    </div>
  );
};
export const WatchPageShimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-col flex-wrap gap-1 mx-1  ">
      {console.log("shimmer loading")}

      {Array(12)
        .fill("")
        .map((e) => (
          <div className="w-96 h-36 bg-slate-50 flex flex-col shadow-lg rounded-lg border my-2 "></div>
        ))}
    </div>
  );
};
