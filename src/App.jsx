import { useState } from 'react'
import SliderComponent from './components/Slider/SliderComponent'; // Ganti 'namapaket' dengan nama paket Anda
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const images = [
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
    { name: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=400' },
  ];
  return (
    <>
      <div className="App">
        <h1 className='font-serif text-5xl'>React-Slider</h1>
        <div className='flex items-center justify-center my-28'>
          <SliderComponent images={images} />
        </div>
      </div>
    </>
  )
}

export default App
