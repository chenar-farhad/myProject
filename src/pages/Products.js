import { Divider, Skeleton } from "antd";
import React from "react";
import ProductCard from "../components/ProductCard";
import ProductFiltering from "../features/ProductFiltering";
import "../components/styles/Products.css";

export default function Products() {
  return (
    <div className="iBody">
      <div className="iContainerProducts">
        <div className="iItems">
          <Divider className="iDivider" orientation="right">
            کاڵاکان
          </Divider>
          <div className="iProductCards">
            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
              price="15,000"
            />
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
              price="45,750"

            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
              price="25,000"

            />

            <ProductCard
              title="بیستۆکی بلوتووز"
              description="کوالیتی مامناوەندە و تەنها بەڕەنگی سپی بەردەستە"
              image="https://img.joomcdn.net/f262549fff0a8e864270a70d1893c1f654956226_original.jpeg"
            />
            <ProductCard
              title="فاوندەیشن وکۆنسیلەر لە بڕاندی کلینیک"
              description="گونجاوە بۆ هەموو جۆرە پێستێک بەلام نمونەیە بۆ چەور و وشک( پێستی تێکەڵ)"
              image="https://bazarga.com/uploads/products/1651/thumbnail/GBPEKJV1HUz07iYTEfIgYKEMGjlzRqBGwBe1BszD.jpeg"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
            />
            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
            />
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
            />

            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
            />
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
            />

            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
            />
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
            />

            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
            />
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
            />
          </div>
        </div>
        <div className="iFiltering">
          <ProductFiltering />
        </div>
      </div>
    </div>
  );
}
