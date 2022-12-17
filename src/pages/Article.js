import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import {db} from '../firebase-config';
import {doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import {defaultArticle} from './defaultArticle.js';
import WaveCornerImg from '../assets/img/wave_corner.png';

function Article() {    
    const [article, setArticle] = useState("");
    const slug = useParams();

    async function fetchArticle() {
        const docRef = doc(db, "articles", slug.slug)
        const data = await getDoc(docRef)
        if (data.exists()) {
            console.log("Document data:", data.data());
            setArticle(data.data());    
            
          } else {
            console.log("No article");
            setArticle(defaultArticle)
          }
    }

    useEffect(()=>{
        fetchArticle();
    }, [])
    return(
        <>
        <Header/>
        <div className="article-block">
            <img src={article.imgUrl ? article.imgUrl : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt="article-img"></img>
            <div className='article-content'>
                <p className="article-title">{article.title}</p>
                <p className="article-content-text">
                    {article.content}
                </p>
            </div>

        </div>

        <Footer/>

        </>
        
    )

//     const [articles, setArticle] = useState("");

//     async function fetchArticle() {
//         const data = await getDocs(collection(db, 'articles'))
//         setArticle(data.docs.map((doc) => ({...doc.data(), id: doc.id})));    }

//     useEffect(()=>{
//         fetchArticle();
//     }, [])

//     return (
//         <>
//         <Header/>
//         {/* {articles.map((article) => {
            
//         }} */}
//         <div class="article-block">
//             <img src={articleImg} alt="article-img"></img>
//             <div className='article-content'>
//                 <p className="article-title">{articles}</p>
//                 <p className="article-content-text">
//     //                 
//                 </p>
// //             </div>
// //         </div>

        
//     //         <Footer/>

//     //     </>
//     )
}

export default Article;
