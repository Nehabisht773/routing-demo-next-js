export default function ProductDetails({ params } : { params: { productId: string } }){
    return <>Details about product {params.productId}!!</>
}