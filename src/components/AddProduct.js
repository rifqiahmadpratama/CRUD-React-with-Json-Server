import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch("http://localhost:8080/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>

          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                value={price}
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
