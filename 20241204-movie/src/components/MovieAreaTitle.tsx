export default function MovieAreaTitle({ title }: { title: string }) {
  return (
    <>
      <span className='text-yellow-600'>ONLINE STREAMING</span>
      <h2 className='text-[36px] font-bold mb-8'>{title}</h2>
    </>
  );
}
