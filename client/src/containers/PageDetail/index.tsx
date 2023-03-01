import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useApp } from "hooks/useApp";

interface paramsType {
   id: string
}

const Component = () => {
   const { id } = useParams<keyof paramsType>() as paramsType

   const { GetItemDetalle, itemDetalle } = useApp();


   useEffect(() => {
      GetItemDetalle({ id }, (err) => {
         console.log(err);
      })
   }, [])

   return (
      <>
         {JSON.stringify(itemDetalle)}
         <h1>{id}</h1>
      </>
   )
}
export default Component