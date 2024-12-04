import Item from "./Item";

export default function Movie({ lists, data, loading, error }: DatasType) {
  if (error) {
    return <h1>Error..</h1>;
  }
  if (loading) {
    return <h1>loading..</h1>;
  }
  return (
    <article className="px-4 py-10 bg-black xs:px-0">
      <section className="container py-8 mx-auto text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{lists}</h2>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 sm:px-0">
          {data?.map((val) => {
            return <Item data={val} key={Math.random()} />;
          })}
        </div>
      </section>
    </article>
  );
}
