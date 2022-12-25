export const getAllPhotoUrls = (
  galleryName: string,
  gallerySize: number
): string[] => {
  return getAllPhotoURLs(galleryName, 0, gallerySize);
};

export const getAllPhotoURLs = (
  galleryName: string,
  start: number,
  end: number
): string[] => {
  const photos = [];
  for (let i = start; i <= end; i++) {
    photos.push(`/images/galleries/${galleryName}/${i}.webp`);
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
