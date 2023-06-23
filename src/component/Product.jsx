import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router';
import { addToCart } from '../redux/reducer/cartSlice';
import {useParams} from 'react-router'; 
import {NavLink} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


function Product() {
const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);

//Para redux
const dispatch = useDispatch();
const navigate = useNavigate();
const handleAddtoCart = (product) => {
dispatch (addToCart(product));
navigate("/cart");
};


useEffect(() => {
	const getProduct = async () => {
    setLoading(true);
    const response = await fetch (`https://fakestoreapi.com/products/${id}`);
    console.log(response);
    setProduct (await response.json());
    setLoading(false);
}
    getProduct();
}, []);

const Loading = () => {
    return (
    <>
    <div className='col-md-6'>
    <Skeleton height={400}/>
    </div>
    <div className='col-md-6'>
    <Skeleton height={50} width={300}/>
    <Skeleton height={75}/>
    <Skeleton height={25} width={150}/>
    <Skeleton height={50}/>
    <Skeleton height={150}/>
    <Skeleton height={50} width={100}/>
    <Skeleton height={50} width={100}/>
    </div>
    </>
    )
 };

const ShowProduct = () => {
return (
    <>
    <div className='col' key={product.id}> 
        <div className='d-flex flex-column align-items-center py-2'>
        <img src={product.image} alt={product.titule} className='img-product-size'/>
        </div>
    </div>
    <div className='col'>
        <div>
        <h4>{product.category}</h4>
        </div>
        <div>
        <h1>{product.title}</h1>
        </div>
        <div>
        <p>Rating: {product.rating && product.rating.rate}<i className='fa fa-star ms-2'/></p>
        </div>
        <div>
        <p className="fs-4">$ {product.price}</p>
        </div>
        <div>
        <p>{product.description}</p>
        </div>
        <div className='d-flex flex-column'>
            <div className='mb-2'>
                
            <button className='btn btn-primary'onClick={()=>handleAddtoCart(product)}>Add to Cart</button>
            </div>
            <div>
            <NavLink to ='/cart' className="btn btn-outline-primary">Go to Cart</NavLink>
            </div>

        </div>

    </div>
    </>
)
};

    

return (
        <>
        <div>
            <div className='container-fluid'>
                <div className='row'>
                {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
        </>
    );
}

export default Product;