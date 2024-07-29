import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';

export const Store = () => {
  return (
    <div>
      <PageHeader>Our Products</PageHeader>
      <div className="flex flex-col gap-6">
        <div>
          <img src="https://placehold.co/300" alt="Product 1" />
          <h2>Product 1</h2>
          <p>Description of Product 1</p>
          <p class="price">$19.99</p>
          <Button>Add to Cart</Button>
        </div>
        <div>
          <img src="https://placehold.co/300" alt="Product 2" />
          <h2>Product 2</h2>
          <p>Description of Product 2</p>
          <p class="price">$29.99</p>
          <Button>Add to Cart</Button>
        </div>
        <div>
          <img src="https://placehold.co/300" alt="Product 3" />
          <h2>Product 3</h2>
          <p>Description of Product 3</p>
          <p class="price">$39.99</p>
          <Button>Add to Cart</Button>
        </div>
        <div>
          <img src="https://placehold.co/300" alt="Product 4" />
          <h2>Product 4</h2>
          <p>Description of Product 4</p>
          <p class="price">$49.99</p>
          <Button>Add to Cart</Button>
        </div>
        <div>
          <img src="https://placehold.co/300" alt="Product 5" />
          <h2>Product 5</h2>
          <p>Description of Product 5</p>
          <p class="price">$59.99</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
