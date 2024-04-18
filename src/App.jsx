import CartInputForm from "components/CartInputForm";
import Loader from "components/Loader";
import CartItemList from 'components/CartItemList';

export const App = () => {
  return (
    <div className="app">
      <CartInputForm />
      <Loader />
      <CartItemList />
    </div>
  );
};
