import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage(
  props: {
    searchParams: { layout?: string; search?: string };
  }
) {
  const layout = props.searchParams.layout || 'grid';
  const search = props.searchParams.search || '';
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;
