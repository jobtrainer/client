import "./index.scss";

export default function Card({className, children}) {
    return (
        <div className={`card_container ${className}`}>{children}</div>
    );
}