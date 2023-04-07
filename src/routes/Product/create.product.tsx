import { useLocation } from 'react-router-dom';
export const CreateProduct = ()=>{
  const location = useLocation()
  console.log(location)
  return <div>
    Create Product
  </div>
}