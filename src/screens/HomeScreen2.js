import Shoe from '../components/Shoe' 
import { useEffect } from 'react'; 
import MessageBox from '../components/MessageBox'; 
import LoadingBox from '../components/LoadingBox'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { listShoes } from '../actions/shoeActions';

export default function HomeScreen2(){  
    const dispatch=useDispatch(); 
    const shoeList = useSelector((state)=> state.shoeList);
    const {loading, error, shoes} = shoeList;
    useEffect(()=>{ 
      dispatch(listShoes());
    },[dispatch]);  
    return(
        <div>
            <h1 className="row mshoes">Men Shoes</h1>
            {loading? (<LoadingBox></LoadingBox>
            ):
            error ? (
              <MessageBox variants="danger">{Error}</MessageBox>
            ):(
            <div className="row center shoes" id="ac2">
              {
                  shoes.map((shoe)=>(
                    <Shoe key={shoe._id} shoe={shoe}></Shoe>
                  ))
              }
            </div>)
            }
        </div>
    );
}