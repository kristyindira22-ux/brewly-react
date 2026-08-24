function ProductForm({ formData, onChange, onSubmit, onCancel, isEditing }) {
  return (
    <div className="product-form">
      <h3>{isEditing ? "Edit Coffee" : "Add Coffee"}</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Coffee Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            placeholder="Enter coffee name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={onChange}
            placeholder="Enter coffee description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={onChange}
            placeholder="/assets/images/..."
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>

          <button type="submit">
            {isEditing ? "Save Changes" : "Add Coffee"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;