// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffeeS, setCoffeeS }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { _id, name, quantity, supplier, taste, photo } = coffee

    // eslint-disable-next-line no-unused-vars
    const handleDelete = _id => {

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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // ekhane console likhle server e hit kore
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        // eslint-disable-next-line react/prop-types
                        const rem=coffeeS.filter(coff=>coff._id!==_id)
                        setCoffeeS(rem)
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button
                            className="btn bg-orange-500" onClick={() => handleDelete(_id)}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;