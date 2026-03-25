import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const watches = [
  { id: 1, name: 'Classic Chronograph', category: 'Luxury', price: 1299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  { id: 2, name: 'Diamond Diver', category: 'Sport', price: 899, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400' },
  { id: 3, name: 'Royal Gold', category: 'Premium', price: 2499, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400' },
  { id: 4, name: 'Silver Moon', category: 'Classic', price: 699, image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400' },
  { id: 5, name: 'Ocean Master', category: 'Diving', price: 1599, image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400' },
  { id: 6, name: 'Vintage Rose', category: 'Vintage', price: 899, image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400' },
  { id: 7, name: 'Titanium Elite', category: 'Sport', price: 1199, image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400' },
  { id: 8, name: 'Pearl Edition', category: 'Luxury', price: 1899, image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400' },
]

function Products() {
  return (
    <>
      <Navbar />
      <section className="products-section">
        <h2 className="section-title">Our Collection</h2>
        <div className="products-grid">
          {watches.map(watch => (
            <div className="product-card" key={watch.id}>
              <img src={watch.image} alt={watch.name} className="product-image" />
              <div className="product-info">
                <span className="product-category">{watch.category}</span>
                <h3 className="product-name">{watch.name}</h3>
                <p className="product-price">${watch.price}</p>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products