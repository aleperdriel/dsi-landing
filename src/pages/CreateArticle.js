import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { addDoc } from 'firebase/firestore';

import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateArticle() { 
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    
    async function fetchUserName() {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
      }
    }

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [content, setContent] = useState("");

    const articleCollRef = collection(db, "articles");
    
    async function createArticle() {
        await addDoc(articleCollRef, {
            title,
            content,
            imgUrl
        })
        navigate('/news')
    }
    return(
        <>
            <Header/>
            <div>
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="btn" onClick={logout}>
                Logout
                </button>
            </div>
            <div className="create-article-container"><h3>Create a new article</h3>
                <input placeholder="Article title" onChange={(e) => setTitle(e.target.value)}></input>
                <input placeholder="Article image url" onChange={(e) => setImgUrl(e.target.value)}></input>
                <textarea placeholder="Write your article here" onChange={(e) => setContent(e.target.value)}></textarea>
                <button onClick={createArticle} className="btn">Post the article</button>
            </div>
        
            <Footer/>

        </>
        
    )
}

export default CreateArticle;
