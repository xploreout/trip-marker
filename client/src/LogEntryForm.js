import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from './API'

const LogEntryForm = ({marker, onClose}) => {
  const { handleSubmit, register } = useForm();
  const {longitude, latitude} = marker;
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = latitude;
      data.longitude = longitude;
      await createLogEntry(data);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='entry-form'>
      { error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="lng">Longitude</label>
      <input  name="lng" defaultValue={longitude} ref ={register}/>
      <label htmlFor="lat">Latitude</label>
      <input  name="lat" defaultValue={latitude} ref={register}/>
      <label htmlFor="title">Title</label>
      <input  name="title" ref={register} required></input>
      <label htmlFor="desc" ref={register}>Description</label>
      <textarea  name="desc" row={2} ref={register}></textarea>
      <label htmlFor="image" >Image Url</label>
      <input  name="image" alt="img" ref={register}/>
      <label htmlFor="visitDate" >Visit Date</label>
      <input name="visitDate" type="date" required ref={register}/>
      <button disabled={loading}>{loading ? 'Loading...' : 'Create Marker'}</button>
    </form>
  )
}

export default LogEntryForm;