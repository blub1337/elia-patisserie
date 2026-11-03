import CollectionPage from "@/components/collection-page";

const slugs = [
  "signature-patisserie",
  "cakes-tarts",
  "viennoiserie",
  "artisan-bread",
  "chocolate-pralines",
  "seasonal-creations",
] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CollectionPage slug={slug} />;
}
