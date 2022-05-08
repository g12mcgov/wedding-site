export const getAllPhotoUrls = (): string[] => {
  return getAllPhotoURLs(0, 82);
};

export const getAllPhotoURLs = (start: number, end: number): string[] => {
  const photos = [];
  for (let i = start; i <= end; i++) {
    photos.push(`/images/collage/${i}.webp`);
  }
  return photos;
};

export const shuffle = <T>(array: Array<T>): Array<T> => {
  let currentIndex = array.length;
  let randomIndex = null;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
