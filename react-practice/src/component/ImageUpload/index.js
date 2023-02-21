import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };
  const removePhoto = () => {
    setImageSrc("");
  };
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded"
          className="w-20 h-20 rounded-full object-cover"
        />
      )}
      <button onClick={removePhoto} className="cursor-pointer">
        Remove Photo
      </button>
    </div>
  );
}

export default ImageUpload;
