const CartInputForm = () => {
    return (
      <form>
        <label>
          <span>Name</span>
          <input type="text"></input>
        </label>
        <label>
          <span>Price</span>
          <input type="numberk"></input>
        </label>

        <button type="submit">+add</button>
      </form>
    );
}
 
export default CartInputForm;