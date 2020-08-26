import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './data/createStore';
// import NotificationView from './components/NotificationView';

const NotificationView = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./components/NotificationView')), 0)
    ),
  'NotificationView'
);

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <NotificationView />
      </Suspense>
    </Provider>
  );
}

export default App;
