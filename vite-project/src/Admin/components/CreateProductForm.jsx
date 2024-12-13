import {React,useState} from 'react';
import {Typography} from "@mui/material";
import { Grid,
  TextField,
   Button ,
   FormControl,
   InputLabel,
   Select,
   MenuItem, 
  } from "@mui/material"
import {Fragment} from "react";
import {useDispatch} from "react-redux" 

const initialSizes = [
  { name:"S" , quantity: 0},
  { name:"M" , quantity: 0},
  { name:"L" , quantity: 0},
];

const CreateProductForm = () => {
  const [productData , setProductData]= useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    size:initialSizes,
    quantity:"",
    topLavelCategory:"",
    secondLavelCategory:"",
    thirdLavelCategory:"",
    description:"",
  });

  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState)=>({
      ...prevState,
      [name]:value,
    }));
  };
  const handleSizeChange = (e,index)=>{
    let { name,value} = e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;
    
    const sizes = [...productData.size];
    sizes[index][name]=value;
    setProductData((prevState)=>({
      ...prevState,
      size:sizes,
    }));
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(CreateProduct({data.productData,jwt}))
    console.log(productData);
  };
  return (
    <Fragment className="createProductContainer">
      <Typography varient="h3"
      sx={{textAlign:"center"}}
      className='py-10 text-center'
      >
        Add New Product
      </Typography>
      <form 
      onSubmit={handleSubmit}
      className='min-h-screen '
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            fullWidth
            label='Image URL'
            value={productData.imageUrl}
            onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Color"
            name="color"
            value={productData.color}
            onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
            fullWidth
            label="Price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
            fullWidth
            label="Discounted Price"
            name="discountedPrice"
            value={productData.discountedPrice}
            onChange={handleChange}
            type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
            fullWidth
            label="Discount Percentage"
            name="discountPercent"
            value={productData.discountPercent}
            onChange={handleChange}
            type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
              name='topLavelCategory'
              value={productData.topLavelCategory}
              onChange={handleChange}
              label='Top Lavel Category'
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
              name='secondLavelCategory'
              value={productData.secondLavelCategory}
              onChange={handleChange}
              label='Second Lavel Category'
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
              name='thirdLavelCategory'
              value={productData.thirdLavelCategory}
              onChange={handleChange}
              label='Third Lavel Category'
              >
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="women-dress">women-dress</MenuItem>
                <MenuItem value="t-shirts">t-shirts</MenuItem>
                <MenuItem value="saree">saree</MenuItem>
                <MenuItem value="lehanga_choli">lehanga_choli</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField 
            fullWidth
            id='outlined-multiline-static'
            label="Description"
            multiline
            name='description'
            rows={3}
            onChange={handleChange}
            value={productData.description}
            />
          </Grid>
          {productData.size.map((size,index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                label="Size Name"
                 name='name'
                 value={size.name}
                 onChange={(event)=>handleSizeChange(event,index)}
                 required
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Quantity"
                 name='size_quantity'
                type="number"
                 onChange={(event)=>handleSizeChange(event,index)}
                 required
                fullWidth
                />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button 
            variant='contained'
            sx={{p:1.8}}
            className='py-20'
            size='large'
            type='submit'>
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
   
  )
}

export default CreateProductForm