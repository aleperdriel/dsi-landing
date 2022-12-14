import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import Footer from '../components/Footer';
import articleImg from '../assets/img/hero-org-bg.png';

function Associations() {    
    return(
        <>
            <Header/>
            <div class="article-block">
                <img src={articleImg} alt="article-img"></img>
                <div className='article-content'>
                    <p className="article-title">What is Down Syndrome International?</p>
                    <p className="article-content-text">De toutes les anomalies génétiques qui existent, si la trisomie 21 est une des plus connues, ce n’est pas dû au hasard. Déjà en 1866 le docteur John Langdon-Down décrivait avec une grande justesse les différents syndromes liés à la trisomie 21 (C’est de ce docteur par ailleurs que l’anomalie génétique tira son nom). Ces premières découvertes vont permettre par la suite à la communauté scientifique, en 1959, de présenter des conclusions d’une anomalie génétique responsable de la trisomie 21. C’est la première fois dans l’histoire de la médecine et de la science qu’une anomalie chromosomique est décrite et reconnue chez l’homme. La nouvelle va donc bénéficier d’un grand retentissement international ce qui permettra par la suite d’introduire les trisomiques aux yeux du grand public.

                    C’est dans ce contexte que Down Syndrome International est fondé en 1993 par Jo Mills (Canada), Penny Robertson (Australia) et Sylvia Escamilla (Mexico). Le but de l’organisation est simple : Sensibiliser le grand public à la condition des personnes atteintes d’anomalies génétiques et améliorer leur condition de vie en participant au développement de certains secteurs clés. On les retrouve notamment dans des formations auprès des écoles pour qu’elle puisse proposer des parcours adaptés aux élèves trisomiques. L’un de leur point les plus importants est la formation et l’aide de groupes et associations liés à la trisomie tout autour du monde en leur donnant une voie pour s’exprimer.

                    Down Syndrome International s’est notamment fait connaitre durant l’année 2006 en militant lors de la ratification aux Nations Unies de la Convention relatives aux droits des personnes handicapées. Le but de cette convention est de promouvoir, protéger et assurer la pleine et égale jouissance de tous les droits de l’homme et des libertés fondamentales par toutes les personnes handicapées.
                    En 2011 après une vaste campagne ayant pour but de récolter un soutien international the Brazilian Federation of Associations of Down Syndrome et Down Syndrome International dépose une résolution aux Nations Unies qui définit le 21 mars comme journée officielles des personnes atteintes du Down Syndrome. Cette victoire propulsera Down Syndrome International comme organisation mondiale phare spécialisé dans la question de la trisomie 21.

                    La crédibilité internationale de Down Syndrome International va lui permettre de développer rapidement son activité dans le monde. Dès l’année suivante a lieu la première WDSD (World Down Syndrome Day) conférence aux Nations Unies, qui sera réitérée chaque année, et qui va permettre de sensibiliser le monde aux enjeux des personnes atteintes. S’en suivra des visites et actions concrètes aux quatre coins du monde pour soutenir des projets liés à la trisomie 21.

                    Aujourd’hui Down Syndrome International développe son activité sur le web avec plusieurs actions concrètes visant à développer l’image des handicapés sur internet. Par exemple en mai 2022 Kani, la première influenceuse virtuelle atteinte de trisomie 21, voit le jour. Sa mission est de révolutionner l’internet pour en faire une place inclusive et accueillante pour les personnes trisomiques.
                    </p>
                </div>
            </div>

        
            <Footer/>

        </>
        
    )
}

export default Associations;
