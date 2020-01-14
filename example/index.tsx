import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import GoogleStaticMap from '../src'

const API_KEY: string = (process.env.API_KEY as string);

const App = () => (
  <div>
    <h1>Google Static Maps API</h1>

    <GoogleStaticMap
      apiKey={API_KEY}
      latitude={32.064171}
      longitude={34.7748068}
      style={{ width: 200, height: 200 }}
      size={{ width: 200, height: 200 }}
      zoom={16}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
