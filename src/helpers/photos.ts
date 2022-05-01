export const getAllPhotoUrls = (start: number, end: number): string[] => {
  const photos = [];
  for (let i = start; i <= end; i++) {
    photos.push(`/images/collage/${i}.jpg`);
  }
  return photos;
};
