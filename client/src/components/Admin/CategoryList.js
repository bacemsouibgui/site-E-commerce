import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteCategory } from '../../Redux/actions/CategoryAction';
import EditCategory from '../pages/PagesCategory/EditCategory';
import Swal from 'sweetalert2';
import './styles.css';


const CategoryList = ({category}) => {
  const dispatch = useDispatch()

  const delet=(idCategory)=>{ 
    dispatch(deleteCategory(idCategory));
// Sweet Alert
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Category has been deleted.',
          'success'
        )
      }
    })
    }

    return (
        <tr >
        <th scope="row">{category._id}</th>
        <td>{category.name}</td>
        <td className="btn btn-danger mr-2" onClick={()=>delet(category._id)}>Delete</td>
        
        <td><EditCategory category={category}/></td>
      </tr>

    )
}

export default CategoryList
