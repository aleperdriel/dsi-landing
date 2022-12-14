import Header from '../components/Header';
import Footer from '../components/Footer';

import ImgArticle1 from '../assets/img/First_image.jpg';
import ImgCurrent1 from '../assets/img/Current_project1.jpg'
import ImgCurrent2 from '../assets/img/Current_project2.jpg'
import ImgCurrent3 from '../assets/img/Current_project3.jpg'
import ImgPastEvent1 from '../assets/img/Past_Event1.jpg'
import ImgPastEvent2 from '../assets/img/Past_Event2.jpg'
import ImgPastEvent3 from '../assets/img/Past_Event3.jpg'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";


function News() {
    const [articlesArr, setArticlesArr] = useState([]);
    const postsCollectionRef = collection(db, "articles");

    useEffect(() => {
        const getArticles = async () => {
        const data = await getDocs(postsCollectionRef);
        setArticlesArr(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        

        getArticles();
    },[]);

   
    
    return(
        <>
            <Header/>
            <div className="news-page">
                <section className="news-section">
                    <article className="news-highlight">
                        <div className="highlight-text">
                            <h3>What is down Syndrome ?</h3>
                            <p className="article-description">De toutes les anomalies génétiques qui existent, si la trisomie 21 est une des plus connues, ce n’est pas dû au hasard. Déjà en 1866 le docteur John Langdon-Down décrivait...</p>
                            <Link to="/article/1" className="btn">Explore</Link>
                        </div>          
                        <img src={ImgArticle1} alt="article"></img>
                    </article>
                </section>
                <section className='news-category-section'>
                    <h3>Current projects</h3>
                    <p className="category-description">Here you can see all the current projects and participate if you want</p>
                    <ul className="article-list">
                        <li className="article-item">
                            <img src={ImgCurrent1} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">With us, not for us</Link></p>
                            <p className="article-content">Our global network of people with Down syndrome calls for a commitment to 'With Us Not For Us' on WDSD 2023.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgCurrent2} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">WINNER!! Jessica from Canada</Link></p>
                            <p className="article-content">Congratulations to Jessica Rotolo, the Lots Of Socks 2023 design competition winner.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgCurrent3} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">The first official World Down Syndrome Day in Zambia</Link></p>
                            <p className="article-content">For the first time in 2022, the Government of Zambia recognises World Down Syndrome Day as an official calendar day.</p>
                        </li>
                    </ul>
                </section>
                <hr />
                <section className='news-category-section'>
                    <h3>Past events</h3>
                    <p className="category-description">A few of our articles about past events</p>
                    <ul className="article-list">
                        <li className="article-item">
                            <img src={ImgPastEvent1} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">WDSD 2022: Inclusion Means...</Link></p>
                            <p className="article-content">For World Down Syndrome Day 2022, we asked, what does inclusion mean? Click here to learn more.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgPastEvent2} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">#InclusionMeans - in organisations</Link></p>
                            <p className="article-content">Find out what we think inclusion means in organisations, and what it doesn't mean!</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgPastEvent3} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">#InclusionMeans - in health</Link></p>
                            <p className="article-content">Find out what we think inclusion means in health, and what it doesn't mean!</p>
                        </li>
                    </ul>
                </section>
                {/* Permanent articles */}
                <section className='news-category-section'>
                    <h3>All articles</h3>
                    <p className="category-description">Discover all our articles and share them with your entourage to help us. Learn more about the daily life of people with Down syndrome and also of their family and friends
                    </p>
                    <ul className="article-list">
                        <li className="article-item">
                            <img src={ImgCurrent1} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">In their own words</Link></p>
                            <p className="article-content">People with Down syndrome answer your questions about Down syndrome.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgCurrent2} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">Myths and facts</Link></p>
                            <p className="article-content">Being clear on myths associated with Down syndrome and compare them to the facts.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgCurrent3} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">Use of terminology</Link></p>
                            <p className="article-content">What to say and what not to say about Down syndrome.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgPastEvent1} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">WDSD 2022: Inclusion Means...</Link></p>
                            <p className="article-content">For World Down Syndrome Day 2022, we asked, what does inclusion mean? Click here to learn more.</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgPastEvent2} alt="article"></img>
                            <p className="article-title"><Link to="/article/1">#InclusionMeans - in organisations</Link></p>
                            <p className="article-content">Find out what we think inclusion means in organisations, and what it doesn't mean!</p>
                        </li>
                        <li className="article-item">
                            <img src={ImgPastEvent3} alt="article"></img>
                            <p className="article-title"><Link to="/">#InclusionMeans - in health</Link></p>
                            <p className="article-content">Find out what we think inclusion means in health, and what it doesn't mean!</p>
                        </li>

                        {/* Added articles listed here */}
                        {articlesArr.map((article, index) => {
                        return (
                            <li className="article-item" key={article.id}>
                            <img src={article.imgUrl ? article.imgUrl : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt="article"></img>
                            <p className="article-title"><Link to={`/article/${article.id}`}>{article.title}</Link></p>
                            <p className="article-content"> {article.content} </p>
                            </li>
                        );
                        })}
                        
                    </ul>
                </section>
            </div>
            <Footer/>

        </>
        
    )
}

export default News;
