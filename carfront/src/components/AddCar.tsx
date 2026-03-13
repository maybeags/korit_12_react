import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Car } from "../types";
import { useState } from "react";
import { addCar } from "../api/carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddCar() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError: err => console.log(err),
  });

  const [ open, setOpen ] = useState(false);
  const [ car, setCar ] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });

  // 한줄 짜리라서 필요없을 것 같지만
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    mutate(car);      // 얘가 carapi.ts에 있는 addCar()함수에 해당합니다.
    setCar({
      brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
    });
    handleClickClose();
  }

  return(
    <>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <input type="text" placeholder="Brand" name='brand' value={car.brand} onChange={handleChange}  /><br />
          <input type="text" placeholder="Model" name='model' value={car.model} onChange={handleChange} /><br />
          <input type="text" placeholder="Color" name='color' value={car.color} onChange={handleChange} /><br />
          <input type="text" placeholder="Reg.No" name='registrationNumber' value={car.registrationNumber} onChange={handleChange} /><br />
          <input type="number" placeholder="Year" name='modelYear' value={car.modelYear} onChange={handleChange} /><br />
          <input type="number" placeholder="Price" name='price' value={car.price} onChange={handleChange} /><br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClickClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </>
  );
}