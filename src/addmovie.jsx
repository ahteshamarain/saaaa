//npm install formik and yup



//formik validate before submiting form and yup validate after submitting form


import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {object,string} from "yup";

const userValidationSchema=object({
imgsrc:string().url().required(),
title:string().required(),
name:string().min(10).required(),

});


function Addmovie() {

const formik=useFormik({
initialValues:{
    imgsrc:"",
    title:"",
    name:"",
    link:"",
},

onSubmit:(newMovie)=>{
    addMoive(newMovie);
},
validationSchema : userValidationSchema,

});

const navigate=useNavigate();



const addMoive=(newMovie)=>{
console.log(newMovie);
fetch(`https://686f636c91e85fac42a0cd2f.mockapi.io/movies`,{
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
        "Content-Type":"application/json",
    },
}).then(()=>navigate("/movie"));


};

    return (
<div >
    <form onSubmit={formik.handleSubmit} className=''>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' placeholder='image url' name="imgsrc"></input>
    <p>{formik.errors.imgsrc}</p>
    <br></br>
    <input onChange={formik.handleChange} type='text' placeholder='title' name="title"></input>
    <p>{formik.errors.title}</p>
    <br></br>
    <input onChange={formik.handleChange} type='text' placeholder='name' name="name"></input>
    <p>{formik.errors.name}</p>
    <br>
    </br>
    <input onChange={formik.handleChange} type='text' placeholder='name' name="link"></input>
    <p>{formik.errors.link}</p>
<br></br>
    <button type="submit">Add</button>
</form>
</div>
  )
}

export default Addmovie;