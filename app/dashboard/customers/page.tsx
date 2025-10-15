import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';

  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}