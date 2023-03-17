import endPoints from '@/services/API';
import useFetch from '@/hooks/useFetch';
import { Chart } from '@/common/Chart';

const PRODUCT_LIMIT = 60;
const PRODUCT_OFFSET = 60;

export default function Dashboard() {
  const products = useFetch(
    endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
  );

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  // agrupa las categorias, buscar ocurrencias
  const countOccurrences = (array) =>
    array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Cateegories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: [
          '#ffbb11',
          '#c0c0c0',
          '#50af95',
          '#feba2f',
          '#2a71d0',
        ],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
