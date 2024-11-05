/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainPage } from './src/_app';
import { Platform } from 'react-native';

const queryClient = new QueryClient();

function App(){
  return (
      <>
      <QueryClientProvider client={queryClient}>
        <MainPage />
        {Platform.OS === 'web' && <ReactQueryDevtools position="right" initialIsOpen={false} />}
      </QueryClientProvider>
      </>
  )
}

export default App;
