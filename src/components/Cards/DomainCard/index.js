import Card from "../Card";

import "./index.scss";

export default function DomainCard({id, title, description, imageUrl}) {
    return (
        <Card className="domain_container">
            <img className="domain_image" src={imageUrl} />
            <h5 className="domain_title" >{title}</h5>
            <span className="domain_description">{description}</span>
        </Card>
    );
}