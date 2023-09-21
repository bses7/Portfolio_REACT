const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8 ">
        <img
          className="rounded-2xl object-cover lg:w-[500px] lg:h-[300px] w-[300px] h-[250px]"
          src={item.image}
          alt=""
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3 ">{item.name}</h3>
    </div>
  );
};
export default Project;
