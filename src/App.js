import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Unbeatable Deals on Everything You Need</h1>
        <h4>Fast, simple and Easier</h4>
      </header>

    <nav>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </nav>

    <main>
        <div class="product">
            <img src="placeholder.jpg" alt="Product 1" />
            <h2>Product 1</h2>
            <p>Description of product 1.  Add some details here.</p>
            <p class="price">$20.00</p>
        </div>

        <div class="product">
            <img src="placeholder.jpg" alt="Product 2" />
            <h2>Product 2</h2>
            <p>Description of product 2. Add some details here.</p>
            <p class="price">$40.00</p>
        </div>

        <div class="product">
            <img src="placeholder.jpg" alt="Product 3" />
            <h2>Product 3</h2>
            <p>Description of product 3. Add some details here.</p>
            <p class="price">$60.00</p>
        </div>

        </main>

    <footer>
        &copy; 2023 Awesome Shop
    </footer>
    </>
  );
}

export default App;
