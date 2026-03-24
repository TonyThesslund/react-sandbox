import { useState, useEffect } from 'react';

type DogImage = {
  id: string;
  url: string;
};

export function DogGallery() {
  const [dogs, setDogs] = useState<DogImage[]>([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then((response) => response.json())
      .then((data) => {
        const dogImages: DogImage[] = data.message.map((url: string, index: number) => ({
          id: `${index}-${url}`,
          url,
        }));
        setDogs(dogImages);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Dog Gallery</h2>
      {dogs.length === 0 ? (
        <p>Loading dog...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <img
              key={dog.id}
              src={dog.url}
              alt="Dog"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}