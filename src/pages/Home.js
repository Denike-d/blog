import React, { useState, useEffect } from "react";
import Nav from "../component/Nav/Nav";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Home({ isAuth, setIsAuth }) {
  const [articles, setArticles] = useState([{}]);

  const productCollectionRef = collection(db, "Articles");

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(productCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("Thisis the data", articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className="lg:mx-14 mx-8 mb-8 mt-12">
        <hr className="bg-slate-300 h-0.4"></hr>
        <p className="font-bold text-slate-900 lg:text-[220px] text-[100px] text-center">
          THE BLOG
        </p>
        <hr className="bg-slate-300 h-0.4"></hr>
        <div className="flex mx-auto items-center mt-24">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto">
            {articles.length === 0 ? (
              <p>No Articles found</p>
            ) : (
              articles.map((item) => (
                <div className="border border-gray" key={item.id}>
                  <div className="justify-center flex align-center">
                    <img src={item.image} />
                  </div>
                  <div className="my-4 px-4">
                    <p className="text-[14px] text-blue-500">
                      {item.createdAt
                        ? item.createdAt.toDate().toDateString()
                        : null}
                    </p>
                    <p className="font-bold text-[16px] mt-4">{item.title}</p>
                    <p className="text-[14px] mt-2 text-gray-500">
                      {item.subheading}
                    </p>

                    <Link to={`/details/` + item.id}>
                      <p className="mt-4 text-blue-500">Read article</p>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
