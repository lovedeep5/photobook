export function getResponsiveSize({ width, height, maxResponsiveWidth }) {
  const maxWidth = Math.round(window.innerWidth * maxResponsiveWidth);
  let newWidth = Math.min(width, maxWidth);
  let newHeight = Math.round((newWidth / width) * height);

  if (newHeight > 400) {
    newHeight = 400;
    newWidth = Math.round((newHeight / height) * width);
  }

  return { width: newWidth, height: newHeight };
}
export function getResponsiveThumbnailsSize({ width, height }) {
  const maxWidth = Math.min(Math.round(window.innerWidth * 0.8), 200);
  const newWidth = Math.min(width, maxWidth);
  const newHeight = Math.round((newWidth / width) * height);
  return { width: newWidth, height: newHeight };
}
