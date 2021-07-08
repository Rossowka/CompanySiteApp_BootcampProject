const Person = ({ name, surname, department, about, src, alt }) => {
    return (
        <div className="person padding-T padding-B">
            <img className="photo--cirlce" src={src} alt={alt}/>
            <div className="person_description">
                <p className="bold">{name} {surname} [ {department} ]</p><br/>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default Person;