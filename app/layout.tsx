"use client";

import React, { ReactNode} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  
  return (
      <Provider store={store}>
              <html lang="en">
                  <body>{children}</body>
              </html>
      </Provider>
  );
};

export default RootLayout;
