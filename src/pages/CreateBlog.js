import React, { useState } from "react";
import { addPost } from "../firebase";
import { storage } from "./../firebase";
import { Timestamp } from "firebase/firestore";
import Nav from "../component/Nav/Nav";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CreateBlog({ isAuth, setIsAuth }) {
  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const createdAt = Timestamp.now().toDate();

  function handlePublish() {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        console.log("Image URL:", url);
        addPost(title, subheading, post, url, createdAt);
      });
      setImage("");
      setPost("");
      setTitle("");
      setSubheading("");
    });
  }

  return (
    <div>
      {" "}
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className="mx-[300px] my-8">
        <p className="text-center font-bold text-3xl">CREATE A POST</p>
        <div className="mt-4">
          <label>Title</label>
          <div className="w-[700px]">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full h-12 border rounded-md mt-2 py-2 px-4"
              placeholder="add a title..."
            />
          </div>
        </div>
        <div className="mt-4">
          <label>Sub-heading</label>
          <div className="w-[700px]">
            {" "}
            <input
              type="text"
              onChange={(e) => setSubheading(e.target.value)}
              value={subheading}
              className="w-full h-12 border rounded-md mt-2 py-2 px-4"
              placeholder="add a subtitle"
            />
          </div>
        </div>
        <div className="mt-4 inline-block gap-4">
          <label>Post</label>

          <textarea
            placeholder="write a post"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            className="w-[700px] h-[400px] border rounded-md py-2 px-4 mt-2"
          />
        </div>
        <div className="mt-4">
          <label>Upload cover</label>
          <div>
            {" "}
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[700px] mt-2"
            />
          </div>
        </div>
        <button
          onClick={handlePublish}
          className="w-[200px] bg-blue-400 mt-8 py-2 text-white text-[18px]"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
