"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ProductGrid } from "@/components/product-card";
import { categories, products, type Category } from "@/lib/products";

const filters = ["All pieces", ...categories.map((category) => category.name)] as const;
type Filter = (typeof filters)[number];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Filter>("All pieces");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (requestedCategory && categories.some((category) => category.name === requestedCategory)) {
      setActiveCategory(requestedCategory as Category);
    }
  }, []);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesCategory = activeCategory === "All pieces" || product.category === activeCategory;
      const matchesSearch = !query || `${product.name} ${product.category} ${product.color}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeCategory, search, sort]);

  return (
    <div className="shop-page page-wrap">
      <div className="shop-intro">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Shop all</span></div>
        <p className="eyebrow">The FORME collection</p>
        <h1>Things to live with.</h1>
        <p>Thoughtful objects, tactile materials, and everyday forms that feel just right.</p>
      </div>
      <div className="shop-controls">
        <div className="filter-list" aria-label="Filter by category">
          {filters.map((filter) => (
            <button className={activeCategory === filter ? "filter-chip active" : "filter-chip"} type="button" key={filter} onClick={() => setActiveCategory(filter)}>
              {filter}
            </button>
          ))}
        </div>
        <div className="shop-tools">
          <label className="search-field">
            <span className="sr-only">Search products</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4.5 4.5" /></svg>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection" />
          </label>
          <label className="sort-field">
            <span className="sr-only">Sort products</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
      </div>
      <p className="result-count" aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"}</p>
      <ProductGrid products={visibleProducts} emptyMessage="Nothing found for that search. Try a different term or category." />
      <div className="shop-bottom-note">A considered collection, made for real life. <Link href="/">Back to the beginning ↗</Link></div>
    </div>
  );
}
