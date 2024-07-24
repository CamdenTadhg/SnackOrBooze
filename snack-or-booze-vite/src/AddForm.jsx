import React, {useState} from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";
import SnackOrBoozeApi from "./Api";
import './AddForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Component renders form to create new snacks and drinks in the database
function AddForm({setSnacks, setDrinks}) {
    //set initial state for form
    const initialState = {
        type: 'snacks',
        id: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    }
    const [formData, setFormData] = useState(initialState);
    //handle change to form entries
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };
    
    //handle form submission. Create a new snack or drink and get the updated list
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {type, id, name, description, recipe, serve} = formData;
        const data = {id, name, description, recipe, serve};
        await SnackOrBoozeApi.addGoodies(type, data);
        setFormData(initialState);
        let snacks = await SnackOrBoozeApi.getGoodies('snacks');
        let drinks = await SnackOrBoozeApi.getGoodies('drinks');
        setSnacks(snacks);
        setDrinks(drinks);
    }

    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
             Add A Menu Item
            </CardTitle>
            <form onSubmit={handleSubmit} className='AddForm-form'>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="type" name="type" value={formData.type} onChange={handleChange}>
                        <option value="snacks">Snack</option>
                        <option value="drinks">Drink</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id">Id:  </label>
                    <input type='text' placeholder='id' id="id" name='id' value={formData.id} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name:  </label>
                    <input type='text' placeholder='name' id="name" name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type='text' placeholder='description' id="description" name='description' value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="recipe">Recipe: </label>
                    <input type='text' placeholder='recipe' id="recipe" name='recipe' value={formData.recipe} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="serve">Serve:</label> 
                    <input type='text' placeholder='serve' id="serve" name='serve' value={formData.serve} onChange={handleChange} />
                </div> 
                <button>Add</button>
            </form>
          </CardBody>
        </Card>
      </section>
    );
  }

export default AddForm;