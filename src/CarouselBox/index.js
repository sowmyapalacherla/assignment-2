import './index.css'

const CarouselBox =(props) => {
    const {heading,description,image} = props 

    return(
        <>
        <div className="single-container">
    <img src={image} alt={heading} className='image'/>
    <h1 className="heading">{heading}</h1>
    <p className="description">{description}</p>
</div>
    <div className="mobile-single-container">
    <img src={image} alt={heading} className='mobile-image'/>
    <h1 className="mobile-heading">{heading}</h1>
    <p className="mobile-description">{description}</p>
</div>
</>
    )

}
export default CarouselBox