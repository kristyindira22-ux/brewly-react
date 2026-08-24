import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([
  {
    id: 1,
    name: "Gayo Aceh",
    description: "Rich chocolate notes with a smooth finish.",
    image: "/assets/images/biji kopi kedua.png",
  },
  {
    id: 2,
    name: "Premium Arabica",
    description: "Smooth body with sweet caramel and fruity notes.",
    image: "/assets/images/biji kopi pertama.png",
  },
  ]);
  const [showForm, setShowForm] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [deletingProduct, setDeletingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      image: formData.image,
    };

    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);

    setFormData({
      name: "",
      description: "",
      image: "",
    });

    setShowForm(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
    });
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === editingProduct.id
          ? {
              ...product,
              name: formData.name,
              description: formData.description,
              image: formData.image,
            }
          : product
      )
    );

    setEditingProduct(null);

    setFormData({
      name: "",
      description: "",
      image: "",
    });
  };

  const handleDeleteProduct = (product) => {
  setDeletingProduct(product);
};

  const confirmDeleteProduct = () => {
    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== deletingProduct.id
      )
    );

    setDeletingProduct(null);
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              <span>Premium</span> Coffee
              <br />
              Bean Supplier
            </h1>

            <p>
              Partner with Brewly to access premium Arabica and Robusta beans
              sourced directly from trusted Indonesian farmers. We help cafés
              deliver unforgettable coffee experiences with consistent quality
              and reliable supply.
            </p>

            <Link to="/register" className="hero-button">
              Be Our Partner
            </Link>
          </div>

          <div className="hero-image">
            <img
              src="/assets/images/biji kopi pertama.png"
              alt="Premium coffee beans"
            />
          </div>
        </section>

        {/* Clients */}
        <section className="clients-section" id="clients">
          <div className="section-heading">
            <h2>Our Clients</h2>
            <p>
              Proudly supplying premium coffee beans to cafés across the region.
            </p>
          </div>

          <div className="client-logos">
            {[
              "logo 1.png",
              "logo 2.png",
              "logo 3.png",
              "logo 4.png",
              "logo 5.png",
              "logo 6.png",
              "logo 7.png",
            ].map((logo) => (
              <img
                key={logo}
                src={`/assets/images/${logo}`}
                alt="Brewly client"
              />
            ))}
          </div>
        </section>

        {/* Coffee Products */}
<section className="products-section" id="products">
  <div className="section-heading">
    <h2>Our Coffee Beans</h2>
    <p>
      Explore our selection of premium coffee beans sourced from Indonesia.
    </p>
  </div>

  <button
    className="add-product-button"
    onClick={() => {
      setEditingProduct(null);
      setFormData({
        name: "",
        description: "",
        image: "",
      });
      setShowForm(true);
    }}
  >
    + Add Coffee
  </button>

  {showForm && (
  <ProductForm
    formData={formData}
    onChange={handleFormChange}
    onSubmit={handleAddProduct}
    onCancel={() => {
      setShowForm(false);
      setFormData({
        name: "",
        description: "",
        image: "",
      });
    }}
  />
)}

  <div className="product-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        editingProduct={editingProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onSave={handleUpdateProduct}
        onCancel={() => {
          setEditingProduct(null);
          setFormData({
            name: "",
            description: "",
            image: "",
          });
        }}
        formData={formData}
        onChange={handleFormChange}
      />
    ))}
  </div>
</section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="section-heading">
            <h2>Trusted by Specialty Coffee Businesses</h2>
            <p>Testimonials from our partners</p>
          </div>

          <div className="testimonial-grid">
            {[
              {
                text: "Brewly has been our trusted supplier for over three years. The consistency and flavor profile are exceptional.",
                name: "The Artisan Cup",
                location: "Jakarta",
              },
              {
                text: "The quality of the beans has helped us create a signature espresso that our customers love.",
                name: "North Brew Coffee",
                location: "Bandung",
              },
              {
                text: "Fast delivery, excellent communication, and premium beans every time.",
                name: "Morning House",
                location: "Surabaya",
              },
            ].map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-icon"></div>

                <blockquote>"{testimonial.text}"</blockquote>

                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-location">
                  {testimonial.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <h2>
            Ready to Brew Something
            <br />
            Exceptional?
          </h2>

          <Link to="/register" className="cta-button">
            Contact Us
          </Link>
        </section>
        {deletingProduct && (
  <div
    className="delete-modal-overlay"
    onClick={() => setDeletingProduct(null)}
  >
    <div
      className="delete-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <h3>Delete Coffee?</h3>

      <p>
        Are you sure you want to delete{" "}
        <strong>{deletingProduct.name}</strong>?
      </p>

      <div className="delete-modal-actions">
        <button
          type="button"
          onClick={() => setDeletingProduct(null)}
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={confirmDeleteProduct}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
      </main>

      <Footer />
    </>
  );

}
export default Home;