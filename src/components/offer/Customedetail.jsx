import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../helpers/config';
import { toast } from 'react-toastify';
import './CustomeDetail.css';
import Slider from 'react-slick';

function CustomeDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const [colors, setColors] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);
    const defaultQuantity = 1;
    const [quantity, setQuantity] = useState(defaultQuantity);
    const [formData, setFormData] = useState({
        size: '',
        gram: '',
        cent: '',
        color: '',
        description: '',
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imgSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const imgNavSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
    };

    const mainImageRef = useRef(null);
    const navImageRef = useRef(null);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/products/customized-products/${id}/`);
            setProduct(response.data);
            setAdditionalImages(response.data.additional_images);
        } catch (error) {
            console.error("Error fetching product details:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchColors = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/products/colors_list/`);
            console.log("Response data:", response.data);

            if (Array.isArray(response.data)) {
                setColors(response.data);
            } else {
                console.warn("Unexpected data format:", response.data);
                setColors([]);
            }
        } catch (error) {
            console.error('Error fetching colors:', error);
            setColors([]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        const orderData = {
            product: id,
            size: formData.size,
            gram: formData.gram,
            cent: formData.cent,
            color: formData.color,
            description: formData.description,
            quantity: quantity,
        };
        try {
            const response = await axios.post(`${BASE_URL}/products/customized-orders/`, orderData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Order placed successfully');
            setFormData({
                size: '',
                gram: '',
                cent: '',
                color: '',
                description: '',
            });
            setQuantity(defaultQuantity);
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error('Error placing order');
        }
    };

    useEffect(() => {
        fetchProductDetails();
        fetchColors();  
    }, [id]);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    const mainImage = product?.product_image ? product.product_image : null;

    return (
        <div className="product-detail">
            {isLoading ? (
                <p>Loading...</p>
            ) : product ? (
                <>
                    <h2>{product.product_name}</h2>
                    <Slider className="fz-product-details__img-slider br-01" {...imgSliderSettings} ref={mainImageRef}>
                        {mainImage && (
                            <div>
                                <img src={mainImage} alt="Product Image" />
                            </div>
                        )}
                        {additionalImages.map((image, index) => (
                            <div key={index}>
                                <img src={image.image} alt={`Product Additional Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>

                    <Slider
                        className="fz-product-details__img-nav"
                        {...imgNavSettings}
                        ref={navImageRef}
                    >
                        {mainImage && (
                            <div onClick={() => mainImageRef.current.slickGoTo(0)}>
                                <img src={mainImage} alt="Thumbnail Image" />
                            </div>
                        )}
                        {additionalImages.map((image, index) => (
                            <div key={index} onClick={() => mainImageRef.current.slickGoTo(index + 1)}>
                                <img src={image.image} alt={`Thumbnail Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>

                    <p>SKU: {product.SKU}</p>
                    <p>Category: {product.category_name}</p>
                    <div className="fz-product-details__quantity cart-product__quantity">
                        <button className="minus-btn cart-product__minus" onClick={() => handleQuantityChange(quantity - 1)}>
                            <i className="fa-light fa-minus"></i>
                        </button>
                        <input
                            type="number"
                            name="product-quantity"
                            className="cart-product-quantity-input"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(Math.max(1, parseInt(e.target.value)))}
                            min="1"
                        />
                        <button className="plus-btn cart-product__plus" onClick={() => handleQuantityChange(quantity + 1)}>
                            <i className="fa-light fa-plus"></i>
                        </button>
                    </div>
                    <form className="customization-form" onSubmit={handleSubmit}>
                        <label>
                            Size:
                            <input
                                type="text"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Gram:
                            <input
                                type="number"
                                name="gram"
                                value={formData.gram}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Cent:
                            <input
                                type="number"
                                name="cent"
                                value={formData.cent}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label htmlFor="color" className=" ">Color</label>
                        <div className=" ">
                            <select className="form-control" value={formData.color} name="color" onChange={handleChange} required>
                                <option value="" disabled>Select a Color</option>
                                {colors.map((color) => (
                                    <option key={color.id} value={color.id}>{color.color}</option>
                                ))}
                            </select>
                        </div>


                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit">Place Order</button>
                    </form>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}

export default CustomeDetail;
