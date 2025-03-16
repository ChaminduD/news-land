import image from '../assets/news.jpg';
import PropTypes from 'prop-types';

const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light px-2 py-2 align-self-stretch" style={{maxWidth:"345px"}}>
            <img src={src?src:image} style={{height:"200px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.length > 50 ? title.slice(0,48).trim() + "..." : title}</h5>
                <p className="card-text">{description ? (description.length > 90 ? description.slice(0,90).trim() + "..." : description) : "News is a report of a current event. It is information about something that has just happened."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string.isRequired,
}

export default NewsItem