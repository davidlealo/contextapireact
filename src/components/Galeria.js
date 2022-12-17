import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";
import PhotoCard from "./PhotoCard";

export default function Home() {
  const { photos, setPhotos } = useContext(Context);

  const toggleLiked = (photo) => {
    photo.liked = !photo.liked;
    setPhotos([...photos]);
  };
  return (
    <div className="galeria grid-columns-5 p-3">
{photos &&
        photos.map((photo) => {
          return (
            <PhotoCard key={photo.id} photo={photo} toggleLiked={toggleLiked} />
          );
        })}
    </div>
  );
}