import { Col, Container, Row, Spinner, Table, } from "react-bootstrap"
import { useLoaderData } from "react-router-dom";
import TableDataOfChef from "../TableDataOfChef/TableDataOfChef";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useConstant } from "@react-spring/shared";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const ChefPage = () => {
    const { setChefID } = useContext(AuthContext);
    const chefInfo = useLoaderData();
    const { Chef_Picture, Chef_Name, Biography, Number_of_Recipies, Year_of_Experience, _id, Recipes } = chefInfo;

    console.log(chefInfo)

    // CLEARING CHEFID STATE ==========
    useEffect(() => {
        setChefID('');
    }, [])



    // INITIALIZE  AOS=========
    useEffect(() => {
        AOS.init();
    }, [])





    if (!Recipes) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }






    return (

        <Container>
            {/*HEADING OF THIS COMPONENT=======  */}
            <h1 data-aos="flip-left" data-aos-duration="1500" className="fw-bold display-6 text-center mb-5">Chef Details  <img className='img-fluid chef-carnival-pic' src="https://images.fineartamerica.com/images-medium-large-5/chef-cook-baker-smiling-cartoon-aloysius-patrimonio.jpg" alt="" />
            </h1>



            {/* banner of this page=========== */}
            <Row className="pt-3">
                {/* image of chef==== */}
                <Col data-aos="fade-right" data-aos-duration="1000" sm={12} md={6}>
                    <img className="img-fluid rounded" src={Chef_Picture} alt="" />
                </Col>


                {/* details information of chef============== */}
                <Col data-aos="fade-up-left" data-aos-duration="1000" sm={12} md={6}>

                    <p><span className="fw-bold ">Name</span> : {Chef_Name}</p>

                    <p><span className="fw-bold ">Number Of Recipie</span> : {Number_of_Recipies}</p>
                    <p><span className="fw-bold ">Experience</span> : {Year_of_Experience} years</p>
                    <p><span className="fw-bold ">Biography</span> : {Biography}</p>


                </Col>

            </Row>





            <h1 data-aos="fade-right" data-aos-duration="1000" className="text-center fw-bold  pt-5 my-5">{Chef_Name}'s recipies</h1>


            {/* Table to show the recipes============== */}
            <Table data-aos="fade-up-left" data-aos-duration="1500" striped bordered hover className="my-5">
                <thead>
                    <tr>
                        <th>Recipie number</th>
                        <th>Recipie Name </th>
                        <th>Ingradiant</th>
                        <th>Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        Recipes.map(item => <tr>


                            <td>{Recipes.indexOf(item) + 1}</td>
                            <td>{item.Recipe_Name}</td>
                            <td>{item.Ingredients}</td>
                            <td>{item.Cooking_Method}</td>
                            <td>


                                <button>Favourite</button>



                            </td>




                        </tr>)
                    }


                </tbody>
            </Table>





        </Container>
    );
};

export default ChefPage;