// src/pages/Register.jsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', data);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error(
        error.response?.data?.error || error.response?.data?.message || 'Registration failed'
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className="w-full p-2 mb-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="w-full p-2 mb-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className="w-full p-2 mb-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
