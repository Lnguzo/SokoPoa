import React, { useState } from 'react';

export default function ProductUpload() {
  const [form, setForm] = useState({
    id: '',
    name: '',
    category: '',
    new_price: '',
    old_price: '',
    available: true,
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFile = (event) => {
    const nextFile = event.target.files[0];
    setFile(nextFile);
    setPreview(nextFile ? URL.createObjectURL(nextFile) : null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setStatus('Please choose an image before submitting.');
      return;
    }
    setLoading(true);
    setStatus('Uploading image...');

    try {
      const imageForm = new FormData();
      imageForm.append('product', file);

      const uploadResponse = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: imageForm,
      });

      if (!uploadResponse.ok) {
        throw new Error('Image upload failed');
      }

      const uploadData = await uploadResponse.json();
      const imageUrl = uploadData.image_url;

      setStatus('Saving product details...');

      const payload = {
        id: Number(form.id) || Date.now(),
        name: form.name,
        category: form.category,
        image: imageUrl,
        new_price: Number(form.new_price) || 0,
        old_price: Number(form.old_price) || 0,
        available: form.available,
      };

      const productResponse = await fetch('http://localhost:5000/addproducts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!productResponse.ok) {
        throw new Error('Product save failed');
      }

      setStatus(`Product saved: ${form.name}`);
      setForm({ id: '', name: '', category: '', new_price: '', old_price: '', available: true });
      setFile(null);
      setPreview(null);
    } catch (error) {
      setStatus(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="upload" className="upload-panel fade-in">
      <div className="section-title">
        <h2>Product upload system</h2>
        <p>Quickly upload an image and add product details for your store catalog.</p>
      </div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="field-group">
            <span>Product name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Shoes, bag, jacket" required />
          </label>
          <label className="field-group">
            <span>Category</span>
            <input name="category" value={form.category} onChange={handleChange} placeholder="Fashion, electronics" required />
          </label>
          <label className="field-group">
            <span>New price</span>
            <input name="new_price" type="number" value={form.new_price} onChange={handleChange} placeholder="35.00" required />
          </label>
          <label className="field-group">
            <span>Old price</span>
            <input name="old_price" type="number" value={form.old_price} onChange={handleChange} placeholder="40.00" />
          </label>
          <label className="field-group">
            <span>Product ID</span>
            <input name="id" type="text" value={form.id} onChange={handleChange} placeholder="Optional numeric id" />
          </label>
          <label className="field-group checkbox-group">
            <span>Available</span>
            <input name="available" type="checkbox" checked={form.available} onChange={handleChange} />
          </label>
        </div>

        <label className="field-group file-group">
          <span>Product image</span>
          <input name="product" type="file" accept="image/*" onChange={handleFile} />
        </label>

        {preview && (
          <div className="preview-card fade-in">
            <div className="preview-label">Preview</div>
            <img src={preview} alt="Product preview" />
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit product'}
          </button>
          <div className="muted status-text">{status}</div>
        </div>
      </form>
    </section>
  );
}
