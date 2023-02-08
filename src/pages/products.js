import Products from "components/products"

export default function products({data}) {
    return(
      <Products data={data}/>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const data = await res.json();

    return {
        props:{
            data
        }
    }
}

