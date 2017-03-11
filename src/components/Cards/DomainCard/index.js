import Card from "../Card";

import "./index.scss";

export default function DomainCard({id, title, description, imageUrl}) {
    const domainHeaderText = title.split('').filter(curr => curr.match(/[A-Z]/)).join('');
    return (
        <Card className="domain_container">
            {/*<img className="domain_image" src={imageUrl} />*/}
            <div className="domain_display_container"><span className="domain_display_title">{domainHeaderText}</span></div>
            <div className="domain_details">
                <h5 className="domain_title">{title}</h5>
                <div className="domain_description">{description}</div>
            </div>
        </Card>
    );
}