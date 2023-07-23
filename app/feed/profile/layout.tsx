import type { Metadata } from 'next';

import EditModal from '@/components/layout/Modals/EditModal';

export const metadata: Metadata = {
  title: 'Equal Reach | Profile',
  description:
    'Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.',
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="col-span-10 lg:col-span-6 border-x border-gray-200">
      <EditModal />
      {children}
    </main>
  );
};

export default layout;
