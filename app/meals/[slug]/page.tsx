const DynamicMealsPage = ({ params }: { params: { slug: string } }) => {
  return <h1>{params.slug}</h1>;
};

export default DynamicMealsPage;
