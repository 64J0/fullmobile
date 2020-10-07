import React from 'react';
// eslint-disable-next-line prettier/prettier
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      // eslint-disable-next-line prettier/prettier
      source={{ uri: 'http://fullengenharia.com.br/projetos-de-arquitetura/' }}
    />
  );
};

export default App;
