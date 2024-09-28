function page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug
  return <div>{decodedSlug}</div>;
}

export default page;
