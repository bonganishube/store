import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ProductsPage(
  props: {
    searchParams: SearchParams;
  }
) {
  const resolvedSearchParams = await props.searchParams; // Resolve the promise
  const layout = Array.isArray(resolvedSearchParams.layout)
    ? resolvedSearchParams.layout.join(',') // Convert array to string
    : resolvedSearchParams.layout || 'grid'; // Default to 'grid'

  const search = Array.isArray(resolvedSearchParams.search)
    ? resolvedSearchParams.search.join(',') // Convert array to string
    : resolvedSearchParams.search || ''; // Default to an empty string

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
