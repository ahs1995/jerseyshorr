function page({ params }) {
  const { slug } = params;
  return <div>{slug}</div>;
}

export default page;
