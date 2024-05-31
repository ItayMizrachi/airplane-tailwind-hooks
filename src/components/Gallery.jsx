import useGallery from "../hooks/useGallery";

const Gallery = () => {
  const { gallery, loading, error } = useGallery();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-[1260px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
