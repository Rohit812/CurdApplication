import NotFount from '../assests/images/Aloo-Pakora.jpg';

const PageNotFount=()=>{
    return(
        <>
        <p><span>"Oops Something went wrong" </span></p>
        <p> PageNotFount</p>
        <img src={NotFount} style={{width:'30%', margin:'80px 0 0 35%'}}/>

        </>
    )
}
 export default  PageNotFount;