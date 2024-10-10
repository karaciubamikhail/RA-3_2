export function Listing (data){
    let item =  data.items.map((el,id)=>{
        if(el.state != "removed" ){
            let price = <p className="item-price">{el.currency_code}{el.price}</p>
            if(el.currency_code === 'USD'){
                price = <p className="item-price">${el.price}</p>
            }else if(el.currency_code === 'EUR'){
                price = <p className="item-price">€{el.price}</p>
            }else{
                price = <p className="item-price">{el.price}{el.currency_code}</p>
            }
            let quantity = <p className="item-quantity level-low">{el.quantity } left</p>
            if(el.quantity < 10){
                quantity = <p className="item-quantity level-low">{el.quantity } left</p>
            }
            else if(el.quantity <= 20){
            quantity= <p className="item-quantity level-high">{el.quantity } left</p>
            }
            else if(el.quantity > 50){
                quantity = <p className="item-quantity level-medium ">{el.quantity } left</p>
            }
            return(
            <div key={id} className="item">
                <div className="item-image">
                    <a href={el.url}><img src={el.MainImage?.url_570xN ?? ''}/></a>
                </div>
                <div className="item-details">
                    <p className="item-title">{el.title}</p>
                    {price}
                    {quantity}
                </div>
            </div>)
        }
        return 
})

    return(
        <div className="item-list">
            {item}
        </div>
    )
}