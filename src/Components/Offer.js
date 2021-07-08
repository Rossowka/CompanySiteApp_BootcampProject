import Item from './Item'


const Offer = (props) => {
    const offerItems = props.itemList.map(offer => {
        return (
            <Item key={offer.id} isNew={offer.isNew} name={offer.name} />
        )
    })

    return (
        <section id="offer">
            <div className="padding-T padding-B container">
                <h1 className="text-white padding-T padding-B">Czym się zajmuje nasza firma?</h1>
                <div className="offer_container">
                    {offerItems}
                </div>
            </div>
        </section>
    )
}

export default Offer;