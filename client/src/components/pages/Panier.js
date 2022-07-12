import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getPanier } from '../../Redux/actions/PanierActions';
import {deletepanier} from '../../Redux/actions/PanierActions';
import { Table} from 'react-bootstrap';
const Panier = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPanier());
       
    }, [])
    
    const panier = useSelector(state => state.panierReducer.panier)

    const delette = (idpanier)=>{  
      
        dispatch(deletepanier(idpanier)) ;
        alert ('Your purchase is canceled')

    }

    return (
        <div>
            {(!panier)? <h1>You don't have any product in your Card</h1>:
            panier && panier.listProducts.map(product=>
            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
                <img src={product && product.product.imgUrl} width='250px' height='100px'/>
                <Table striped bordered hover variant="dark">
                    <tr>
                <th style={{color:"black"}}>{product && product.product.name}</th>
                <th style={{color:"blueviolet"}}>{product && product.product.price}</th>
                <th style={{color:"blue"}}>Qty: {product && product.quantity}</th>
                <th style={{color:"brown"}}>Total : {product.quantity*product.product.price}</th>                
                    </tr>

                </Table>

                
               
            </div>

            )
            }

            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
            <span className='btn btn-success' onClick={()=>alert('Your Order is Succesful')}>Pay</span>
            <th className='btn btn-danger'onClick={()=>delette(panier._id)}>Clear the basket</th>
            </div>
           
        </div>
// montant total du panier

    )
}

export default Panier
