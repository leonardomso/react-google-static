<h1 align="center">
   🌍 React Google Static Maps
</h1>

A React component wrapper to use the Google Static Maps API. Don't forget that to use this API you must have a billing account and an Static Maps API key. 

This library supports custom markers. To use a custom icon, you should provide a url link, for example: `https://img.icons8.com/dusk/64/000000/marker.png`.
  

## Installation

```
npm install react-google-static
```

```
yarn add react-google-static
```

## Usage

```jsx
import React from 'react';

const App = () => (
  <div>
    <h1>Google Static Maps API</h1>

    <GoogleStaticMap
      apiKey={API_KEY}
      latitude={32.064171}
      longitude={34.7748068}
      style={{ width:  200, height:  200 }}
      size={{ width:  200, height:  200 }}
      zoom={16}
    />
  </div>
);

export default App;
```

## Usage with Custom Icon

```jsx
import React from 'react';

const App = () => (
  <div>
    <h1>Google Static Maps API</h1>

    <GoogleStaticMap
      apiKey={API_KEY}
      latitude={32.064171}
      longitude={34.7748068}
      style={{ width:  200, height:  200 }}
      size={{ width:  200, height:  200 }}
      zoom={16}
      iconUrl="https://img.icons8.com/dusk/64/000000/marker.png"
    />
  </div>
);

export default App;
```


## Props

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>apiKey</code></td>
    <td><code>Boolean</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>latitude</code></td>
    <td><code>string | number</code></td>
    <td><code>true</code></td>
  </tr>
    <tr>
    <td><code>longitude</code></td>
    <td><code>string | number</code></td>
    <td><code>true</code></td>
  </tr>
   <tr>
    <td><code>size</code></td>
    <td><code>Object</code></td>
    <td><code>true</code></td>
  </tr>
   <tr>
    <td><code>zoom</code></td>
    <td><code>number</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>scale</code></td>
    <td><code>number</code></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>mapFormat</code></td>
    <td><code>'png'  |  'png32'  |  'gif'  |  'jpg'  |  'jpg-baseline'</code></td>
    <td><code>false</code></td>
  </tr>
   <tr>
    <td><code>mapType</code></td>
    <td><code>'roadmap'  |  'satellite'  |  'terrain'  |  'hybrid'</code></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>iconUrl</code></td>
    <td><code>string</code></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>style</code></td>
    <td><code>any</code></td>
    <td><code>false</code></td>
  </tr>
</table>
