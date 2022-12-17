import { Link } from "react-router-dom";

function LearnMoreSection() {
    return(
        <div className="learn-more-block">
            <h2>Down Syndrome International</h2>
            <p>We are an international disabled people's organisation, committed to improving quality of life for people with Down syndrome, promoting their right to be included on a full and equal basis with others.</p>
            <hr className="divider"></hr>
            <Link to='/about' className="btn">Discover more about us</Link>
        </div>
    )
}

export default LearnMoreSection;
