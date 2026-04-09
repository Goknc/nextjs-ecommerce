import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id:number) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    return res.json();
}

export default async function Page({params}: {params: Promise<{id: string}>;}) {
    const {id} = await params;
    const product = await getProduct(Number(id));

    return(
        <div className="flex items-center">
            <img src={product.images[0]} alt="" />
            <div className="ml-5">
                <h1 className="text-3xl mb-5">{product.title}</h1>
                <p className="mb-5">{product.description}</p>
                <AddToCartButton product={product} />
            </div>
        </div>
    )
}