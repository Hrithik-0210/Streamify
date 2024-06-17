export const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-row flex-wrap gap-4 mx-3  ">
      {console.log("shimmer loading")}

      {Array(12)
        .fill("")
        .map((e) => (
          <div className="w-80 h-96 bg-slate-50 flex shadow-lg rounded-lg border mt-24 "></div>
        ))}
    </div>
  );
};
