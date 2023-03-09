import React from "react"

export default function Card(props) {
    // console.log(props.info)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
        
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.info.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.info.stats.rating}</span>
                <span className="gray">({props.info.stats.reviewCount}) • </span>
                <span className="gray">{props.info.location}</span>
            </div>
            <p className="card--title">{props.info.title}</p>
            <p className="card--price"><span className="bold">From ${props.info.price}</span> / person</p>
        </div>
    )
}