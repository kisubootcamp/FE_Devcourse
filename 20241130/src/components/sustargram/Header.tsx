export default function Header({ onRoleBackClick, logoTitle }: IHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">{logoTitle}</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={onRoleBackClick}
          className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-full whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
        >
          <img src="/undo.svg" alt="Moon icon" className="w-5 h-5" />
          {/* <span className="sr-only">Toggle dark mode</span> */}
        </button>
      </div>
    </header>
  );
}
