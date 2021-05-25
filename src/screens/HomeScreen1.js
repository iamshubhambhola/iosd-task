import Shirt from '../components/Shirt'  
import { useEffect } from 'react'; 
import MessageBox from '../components/MessageBox'; 
import LoadingBox from '../components/LoadingBox'; 
import { useDispatch, useSelector } from 'react-redux';
import { listShirts } from '../actions/shirtActions'; 

export default function HomeScreen1(){  
    const dispatch=useDispatch();
    const shirtList = useSelector((state)=> state.shirtList);
    const { loading, error, shirts } = shirtList;
    useEffect(()=>{ 
      dispatch(listShirts());
    },[dispatch]);    

    
    return(
        <div>
            <h1 className="row mshirts">Men Shirts</h1>
            {loading? (<LoadingBox></LoadingBox>
            ):
            error ? (
              <MessageBox variants="danger">{error}</MessageBox>
            ):(
            <div className="row center shirts" id="ac1">
              {
                  shirts.map((shirt)=>(
                    <Shirt key={shirt._id} shirt={shirt}></Shirt>
                  ))
              }
            </div> )
            }
        </div>
    );
}