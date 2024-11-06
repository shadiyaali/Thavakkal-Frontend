import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailSlider from '../sliders/ProductDetailSlider';
import ProductDetailTextSection from './ProductDetailTextSection';
import { BASE_URL } from '../helpers/config';

const ProductDetailSection = () => {
    const { id } = useParams();  
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/products/products/${id}/`);  
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setError('Could not fetch product details. Please try again later.');
            } finally {
                setLoading(false);  
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

    return (
        <section className="fz-product-details bg-gry-1">
            <div className="container">
                <div className="row align-items-start justify-content-center">
                    <div className="col-lg-5 col-md-6 col-12 col-xxs-12">
                        <ProductDetailSlider product={product} />
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <ProductDetailTextSection product={product} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailSection;
