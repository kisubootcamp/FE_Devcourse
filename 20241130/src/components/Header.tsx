export default function Header({ onRecoverImg }: { onRecoverImg: () => void }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
      {/* More Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRecoverImg}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
        >
          <img src="/undo.svg" alt="recover icon" className="h-5 w-5" />
          <span className="sr-only">Recover</span>
        </button>
      </div>
    </header>
  );
}
