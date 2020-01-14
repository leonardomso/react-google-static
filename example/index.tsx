import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import GoogleStaticMap from '../src'

const App = () => (
  <div>
    <h1>Google Static Maps API</h1>

    <GoogleStaticMap
      style={{ width: 200, height: 200 }}
      latitude={32.064171}
      longitude={34.7748068}
      size={{ width: 300, height: 550 }}
      zoom={13}
      apiKey="testing"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
