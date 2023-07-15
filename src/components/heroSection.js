import CostumImage from "./costumImage"


export default function HeroSection(){
    const images = [
        'img/gallery/burger 1.jpeg',
        'img/gallery/burger 2.jpg',
        'img/gallery/burger 3.jpg',
        'img/gallery/burger 4.webp',
        'img/gallery/burger 5.jpeg',
        'img/gallery/burger 6.jpeg',
        'img/gallery/burger 7.jpg',
        'img/gallery/burger 8.jpeg',
        'img/gallery/burger 9.jpg',
    ]
    
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What are we about</h1>
                <p className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CostumImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}