export const Home = ({state})=>{
    return(
     <div>

   <h1>
     {state?.data?.country}
   </h1>
   <p>
    {
        state?.data?.subscriberCountText
    }
   </p>


     </div>
    )
}