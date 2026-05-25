import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h2>Products Page</h2>

      <nav>
        <Link to="phones">Phone</Link> |{" "}
        <Link to="laptops">Laptop</Link>
      </nav>

      <Outlet />
    </>
  );
}