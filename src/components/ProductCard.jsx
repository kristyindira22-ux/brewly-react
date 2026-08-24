function ProductCard({ product, editingProduct, onEdit, onDelete, onSave, onCancel, formData, onChange }) {
  const isEditing = editingProduct?.id === product.id;

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        {isEditing ? (
          <>
            <div className="form-group">
              <label htmlFor={`name-${product.id}`}>Coffee Name</label>
              <input
                id={`name-${product.id}`}
                name="name"
                type="text"
                value={formData.name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`description-${product.id}`}>
                Description
              </label>
              <textarea
                id={`description-${product.id}`}
                name="description"
                value={formData.description}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`image-${product.id}`}>Image URL</label>
              <input
                id={`image-${product.id}`}
                name="image"
                type="text"
                value={formData.image}
                onChange={onChange}
              />
            </div>

            <div className="product-actions">
              <button type="button" onClick={onSave}>
                Save Changes
              </button>

              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <div className="product-actions">
              <button type="button" onClick={() => onEdit(product)}>
                Edit
              </button>

              <button type="button" onClick={() => onDelete(product)}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default ProductCard;