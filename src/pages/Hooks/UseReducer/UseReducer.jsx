import { useReducer } from 'react'

let initialCart = [];
let cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      let index = state.findIndex((item) => item.id === action.product.id);
      if (index != -1) {
        state[index].quantity += 1;
        return [...state];
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    default:
      return state;
  }
};

let arrProduct = [
  { id: 1, img:"http://picsum.photos/100/50", name: "Logitech G903", price: 500 },
  { id: 2, img:"http://picsum.photos/100/51",name: "Logitech G103", price: 200 },
  { id: 3, img:"http://picsum.photos/100/52", name: "Logitech G603", price: 700 },
];

export default function HookUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <div className="container">
      <h3 className="display-4 text-center">Product List</h3>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card text-left">
                <img
                  className="card-img-top"
                  src={item.img}
                  alt={index}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "addToCart",
                        product: item,
                      });
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Cart detail</h3>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
            <td>quantity</td>
            <td>total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
