import { Container } from "react-bootstrap";


const TableDataOfChef = ({name,method,ingrediants,ratings}) => {
    return (
        <Container>
            <tr>
                <td>1</td>
                <td>{name}</td>
                <td>{method}</td>
                <td>{ingrediants}</td>
                <td>{ratings}</td>
            </tr>

        </Container>
    );
};

export default TableDataOfChef;