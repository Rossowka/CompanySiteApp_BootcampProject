import Offer from './Offer'
import About from './About'


const Main = ({ employeeList, itemList }) => {
    return (
        <main>
            <About employeeList={employeeList} />
            <Offer itemList={itemList} />
        </main>
    )
}

export default Main
