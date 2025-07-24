import { useMemo, useState } from 'react';
import { ITEMS } from './items';
// import { Button } from '@/components/ui/button';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(ITEMS);

  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

//   const selectedItem = items.find(item => item.isSelected);
//   const selectedItem = useMemo(() => items.find(item => item.isSelected), [items]);
  const selectedItem = useMemo(() => items.find(item => item.id === count), [items, count]);

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-8'>
      {/* Count and Selected Item */}
      <div className='flex flex-col items-center gap-4'>
        <div className='text-2xl font-bold'>Count: {count}</div>

        {selectedItem && <div>Selected Item: {selectedItem?.id}</div>}

        <div className='flex items-center gap-2'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}