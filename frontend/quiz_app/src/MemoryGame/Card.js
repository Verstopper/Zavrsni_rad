function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"cardM" + itemClass} onClick={() => handleClick(id)}>
            <img className="imgM" src={item.img} alt="" />
        </div>
    )
}

export default Card