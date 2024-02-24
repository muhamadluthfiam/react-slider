---

# Slider Component

Slider Component is a React component that allows you to create a simple image slider with navigation.

## Features

- Navigation with previous and next buttons.
- Zoom in to view images in full size.
- Smooth scrolling for seamless image transitions.

## Installation

You can install the component via npm or yarn:

```bash
npm install react-slider-button
```

or

```bash
yarn add react-slider-button
```

## Usage

```jsx
import React from 'react';
import SliderComponent from 'react-slider-button';

const images = [
  { name: 'image1.jpg' },
  { name: 'image2.jpg' },
  // add more images as needed
];

const App = () => {
  return (
    <SliderComponent
      images={images}
      prevButton={<span>Previous</span>}
      nextButton={<span>Next</span>}
      prevButtonStyle={{ background: 'red' }} // optional style for previous button
      nextButtonStyle={{ background: 'green' }} // optional style for next button
    />
  );
};

export default App;
```

Make sure to adjust the `images` property with the list of images you want to display in the slider.

## Props

- `images`: Array of Objects (required) - List of images to be displayed in the slider.
- `prevButton`: React Element (optional) - Button for navigating to the previous image.
- `nextButton`: React Element (optional) - Button for navigating to the next image.
- `prevButtonStyle`: Object (optional) - Additional styles for the previous button.
- `nextButtonStyle`: Object (optional) - Additional styles for the next button.

---