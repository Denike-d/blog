import React, { useState, useEffect } from "react";
import Nav from "../component/Nav/Nav";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export default function Details({ isAuth, setIsAuth }) {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const docRef = doc(db, "Articles", id);

  useEffect(() => {
    const getDetails = async () => {
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setItem(docSnap.data());
    };
    getDetails();
  }, []);

  return (
    <div>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className="mx-14 mb-8 mt-12">
        <div className="flex mx-auto items-center mt-24">
          <div className="mx-auto">
            {item.length === 0 ? (
              <p>No Articles found</p>
            ) : (
              <div>
                <div className="justify-center flex">
                  <img src={item.image} />
                </div>
                <div className="mt-4 px-4">
                  <p className="text-[14px] text-blue-500 text-center">
                    {item.createdAt
                      ? item.createdAt.toDate().toDateString()
                      : null}
                  </p>
                  <p className="font-bold text-[18px] mt-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-[14px] mt-2 text-gray-500 text-center">
                    {item.subheading}
                  </p>
                  <p className="mt-8 leading-[30px] text-gray-600 text-clip text-center">
                    {item.post}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
