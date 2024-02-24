---

# Slider Component

Slider Component adalah sebuah komponen React yang memungkinkan Anda untuk membuat slider gambar dengan navigasi sederhana.

## Fitur

- Navigasi dengan tombol sebelumnya dan berikutnya.
- Zoom in untuk melihat gambar dengan ukuran penuh.
- Scroll smooth untuk perpindahan gambar yang halus.

## Instalasi

Anda dapat menginstal komponen ini melalui npm atau yarn:

```bash
npm install react-slider
```

atau

```bash
yarn add react-slider
```

## Penggunaan

```jsx
import React from 'react';
import SliderComponent from 'react-slider';

const images = [
  { name: 'gambar1.jpg' },
  { name: 'gambar2.jpg' },
  // tambahkan gambar lainnya sesuai kebutuhan
];

const App = () => {
  return (
    <SliderComponent
      images={images}
      prevButton={<span>Sebelumnya</span>}
      nextButton={<span>Berikutnya</span>}
      prevButtonStyle={{ background: 'red' }} // style opsional untuk tombol sebelumnya
      nextButtonStyle={{ background: 'green' }} // style opsional untuk tombol berikutnya
    />
  );
};

export default App;
```

Pastikan untuk menyesuaikan properti `images` dengan daftar gambar yang ingin Anda tampilkan di slider.

## Props

- `images`: Array of Objects (required) - Daftar gambar yang akan ditampilkan di slider.
- `prevButton`: React Element (optional) - Tombol untuk perpindahan ke gambar sebelumnya.
- `nextButton`: React Element (optional) - Tombol untuk perpindahan ke gambar berikutnya.
- `prevButtonStyle`: Object (optional) - Style tambahan untuk tombol sebelumnya.
- `nextButtonStyle`: Object (optional) - Style tambahan untuk tombol berikutnya.

---
