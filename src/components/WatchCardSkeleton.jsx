export default function WatchCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 animate-pulse">
      <div className="aspect-square bg-white/10" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-16 bg-white/10 rounded" />
        <div className="h-5 w-3/4 bg-white/10 rounded" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-white/10 rounded" />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="h-8 w-24 bg-white/10 rounded" />
          <div className="h-4 w-16 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  )
}