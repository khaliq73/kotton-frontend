import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/ui/ProductGallery';
import SizeChart from '../components/ui/SizeChart';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="pt-[113px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Product specifications (can be added to product data later)
  const productSpecs = {
    fit: product.fit || 'Oversized',
    fabric: product.fabric || 'Cotton Fleece',
    print: product.print || 'DTF - Direct To Film',
    unisex: product.unisex !== undefined ? product.unisex : true,
    modelHeight: product.modelHeight || "6'3",
    modelSize: product.modelSize || 'L',
  };

  return (
    <div className="pt-[113px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6 md:mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-[133px] self-start"
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                {product.name}
              </h1>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {product.description}
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-2">
              <WhatsAppButton productName={product.name} size="lg" />
            </div>
          </motion.div>
        </div>

        {/* Size Chart Section */}
        <div className="mb-12 md:mb-16 border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">Size Guide</h2>
          <div className="bg-gray-50 rounded-lg p-4 md:p-6">
            <SizeChart />
          </div>
        </div>

        {/* Product Information Section */}
        <div className="mb-12 md:mb-16 border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Product Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Product Specifications */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-3">Product Specifications</h3>
              <dl className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="font-medium text-gray-700">Fit:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.fit}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="font-medium text-gray-700">Fabric:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.fabric}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="font-medium text-gray-700">Print:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.print}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="font-medium text-gray-700">Uni-sex:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.unisex ? 'Yes' : 'No'}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="font-medium text-gray-700">(M) Model Height:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.modelHeight}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="font-medium text-gray-700">(M) Model wearing size:</dt>
                  <dd className="text-gray-900 font-medium">{productSpecs.modelSize}</dd>
                </div>
              </dl>
            </div>

            {/* Product Care */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-3">Product Care</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Avoid bleach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Do not iron directly over print.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Dry cleaning is not recommended.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Do not tumble dry.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Please Note */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 bg-amber-50 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Please Note</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-1">•</span>
                <span>Colors may slightly vary depending on your screen brightness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-1">•</span>
                <span>Actual product specifications may vary +/-5%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 pt-8 md:pt-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
