export default function CostumImage({imgSrc, pt}){
    return(
        <div className="costumImage" style={{paddingTop: pt}}>
                <img src={imgSrc}  alt="img not found"/>
        </div>
    )
}