import './App.css';

const EachItem = props =>{
    const {details} = props;
    const {title, category, price, rating, image, description, id} = details;
    console.log(rating)
    return(
        <div className='item-container'>
            <p className='para'>{category}</p>
            <h1 className='head'>{title}</h1>
            <div className='image'>
                <img  src={image} alt={`product${id}`} height={150} width={150}/>
            </div>
            <p className='para'>{description}</p>
            <div className='main-container'>
                <p className='para'>price: {price}</p>
                <div className='sub-container'>
                    <p className='para'>rating: {rating.rate}</p>
                    <p className='para'>rated: {rating.count}</p>
                </div>
            </div>

        </div>
    )
}

export default EachItem