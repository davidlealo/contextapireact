import Heart from "./Heart";

const PhotoCard = ({ photo, toggleLiked }) => {
  return (
    <div
      className="foto"
      style={{ backgroundImage: `url(${photo.src.medium})` }}
      onClick={() => toggleLiked(photo)}
    >
      <Heart filled={photo.liked} />
      {photo.alt}
    </div>
  );
};

export default PhotoCard;