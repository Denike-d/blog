import React, { useState } from "react";
import { storage } from "./../firebase";
import { ref, uploadBytes } from "firebase/storage";

export function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image have been uploaded");
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
