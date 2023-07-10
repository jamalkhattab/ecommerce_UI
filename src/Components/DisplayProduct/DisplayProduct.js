import React,{ useContext, useEffect, useState }  from 'react';
import "./DisplayProduct.css";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

function DisplayProduct(props) {
    const {items,size,addToCart} = useContext(CartContext);
    const[productDetails,setProductDetails] = useState([]);
    let {id} = useParams();

    const addTOCart = function() {
        console.log(productDetails);
        addToCart(productDetails);
    }

    useEffect(()=> {
        //api call
        let list = [
            {
                id: 123456543,
                name: "New Apple iPhone 10",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 54342265,
                name: "New Apple iPhone 11",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
                about: [
                    "Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 123453456543,
                name: "Iphone12",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 12344545456543,
                name: "Iphone13",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "637357",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
                about: [
                    "Desription for iphone 13 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 123465656543,
                name: "Iphone12",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 2356346363,
                name: "Iphone13",
                rating: "637357",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "Desription for iphone 13 -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
        ];
        
        let item = list.filter ( item => {
            if(item.id == id) return item;
        });
        setProductDetails(item[0]);

    },[]);

    return (
        <div>
             <Grid container>
                <Grid item xs={5}>
                    <img className="displayproduct__image" src={productDetails.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder__description">
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}> {productDetails.name} </div>
                        <div>
                            <Rating name="read-only" value={3.5} readOnly  style={{ fontSize: "20px"}}/>
                            {productDetails.ratings} ratings |
                            {productDetails.review}+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="textgap">Price:	<span className="pricetag">₹ {productDetails.price}</span></div>
                            <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                        </div>
                        <div>
                            <br></br>
                            <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                            <div>
                                <ul>
                                {   
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ( (item) =>(
                                        <li>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className="displayproduct__order">
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                            <div > 
                                <button className="displayproduct__button addtocart" onClick={addTOCart}>Add to Cart</button>
                                <Link to="/checkout" onClick={addTOCart}>
                                    <button className="displayproduct__button buynow">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
             </Grid>
        </div>
    );
}

export default DisplayProduct;