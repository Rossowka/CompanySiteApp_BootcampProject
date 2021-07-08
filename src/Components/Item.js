const Item = ({ isNew, name }) => {

    return (
        <div className="box">
            <div className="box_margin">
                <div className="box_content">
                    <h2>{name} <br></br> {isNew ? `(nowość)` : ''}</h2>  
                </div>
            </div>
            {isNew ? <div className="new"></div> : null}
        </div>
    )
}

export default Item;