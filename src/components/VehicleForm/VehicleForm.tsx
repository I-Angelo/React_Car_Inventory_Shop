import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseYear, chooseModel } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface VehicleFormProps {
    id?:string;
    data?:{}
}


//Code below looks familiar because it is connecting with redux files

interface VehicleState {
    make: string;
    year: string;
    model: string;
}

export const VehicleForm = (props:VehicleFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const make = useSelector<VehicleState>(state => state.make);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => { //when press 'submit' button
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000); //this waits for a bit of time and then rteloads the page
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseMake(data.make)); // dispatch is part of React
            dispatch(chooseYear(data.year));
            dispatch(chooseModel(data.model));
            server_calls.create(store.getState()); //since this is the 'else' beacuse the contact doesnt exist then it will call the function to create the contact
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}> {/* This will run 'onSubmit' from line 33 and 31*/}
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Vehicle Make'/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year'/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder='Model'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}



