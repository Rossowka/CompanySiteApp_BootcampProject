import Person from './Person'

const About = (props) => {

    const employeesListShow = props.employeeList.map(person => {
        return (
            <Person key={person.id} name={person.name} surname={person.surname} department={person.department} about={person.about} src={person.src} alt={person.alt} />
        )
    })

    return (
        <section id="about" className="padding-B">
            <div className="padding-T padding-B container">
                <h1 className="padding-T padding-B">Nasi specialiści</h1>
                <div className="padding-T padding-B">
                {employeesListShow}
                </div>
            </div>
        </section>
    )
}

export default About;
